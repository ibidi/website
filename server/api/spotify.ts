import SpotifyWebApi from 'spotify-web-api-node'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  const spotifyApi = new SpotifyWebApi({
    clientId: config.public.spotifyClientId,
    clientSecret: config.public.spotifyClientSecret,
    redirectUri: 'http://localhost:3000/api/spotify/callback'
  })

  try {
    // Cookie'lerden token'ları al
    const cookies = parseCookies(event)
    const accessToken = cookies.spotify_access_token
    const refreshToken = cookies.spotify_refresh_token

    if (accessToken && refreshToken) {
      try {
        spotifyApi.setAccessToken(accessToken)
        spotifyApi.setRefreshToken(refreshToken)

        // Token'ı yenilemeyi dene
        const data = await spotifyApi.refreshAccessToken()
        const newAccessToken = data.body.access_token

        // Yeni access token'ı cookie'ye kaydet
        setCookie(event, 'spotify_access_token', newAccessToken, {
          maxAge: data.body.expires_in,
          path: '/',
          secure: process.env.NODE_ENV === 'production',
          httpOnly: true,
          sameSite: 'lax'
        })

        spotifyApi.setAccessToken(newAccessToken)

        // Son çalınan şarkıları al
        const recentTracks = await spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 })
        
        const songs = recentTracks.body.items.map(item => ({
          id: item.track.id,
          title: item.track.name,
          artist: item.track.artists.map(artist => artist.name).join(', '),
          genre: 'Pop', // Spotify API genre bilgisini doğrudan vermiyor
          date: new Date(item.played_at).toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          thumbnail: item.track.album.images[0]?.url,
          url: item.track.external_urls.spotify
        }))

        return {
          needsAuth: false,
          songs
        }
      } catch (error) {
        console.error('Token yenileme hatası:', error)
        // Token'ları temizle
        deleteCookie(event, 'spotify_access_token')
        deleteCookie(event, 'spotify_refresh_token')
      }
    }

    // Yetkilendirme URL'i oluştur
    const scopes = [
      'user-read-recently-played',
      'user-read-currently-playing',
      'user-read-playback-state',
      'user-top-read',
      'user-read-email',
      'user-read-private'
    ]
    const state = 'spotify-auth-' + Math.random().toString(36).substring(7)
    const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state)
    
    // Yetkilendirme gerekli
    return {
      needsAuth: true,
      authUrl: authorizeURL,
      songs: [] // Yetkilendirme gerektiğinde boş dizi döndür
    }

  } catch (error: any) {
    console.error('Spotify API Hatası:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error instanceof Error ? error.message : 'Spotify API hatası',
      message: 'Spotify API ile iletişim kurulurken bir hata oluştu'
    })
  }
}) 