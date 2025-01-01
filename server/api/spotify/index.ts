import { defineEventHandler } from 'h3'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN
})

// Global değişken olarak token bilgilerini tutuyoruz
let accessToken: string | null = null
let tokenExpirationTime = 0

const refreshAccessToken = async () => {
  try {
    // Token hala geçerliyse yenileme yapmıyoruz
    if (accessToken && Date.now() < tokenExpirationTime - 300000) { // 5 dakika marj
      return accessToken
    }

    const data = await spotifyApi.refreshAccessToken()
    accessToken = data.body.access_token
    tokenExpirationTime = Date.now() + (data.body.expires_in * 1000)
    spotifyApi.setAccessToken(accessToken)
    return accessToken
  } catch (error) {
    throw error
  }
}

export default defineEventHandler(async (event) => {
  try {
    // Çevre değişkenlerini kontrol et
    if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET || !process.env.SPOTIFY_REFRESH_TOKEN) {
      throw new Error('Spotify API bilgileri eksik')
    }
    
    // Token'ı yenile (gerekirse)
    await refreshAccessToken()

    // Şu an çalan şarkıyı al
    const current = await spotifyApi.getMyCurrentPlayingTrack()

    // Şu an çalan şarkı yoksa, son çalınan şarkıyı al
    if (!current.body || !current.body.item) {
      const recent = await spotifyApi.getMyRecentlyPlayedTracks({ limit: 1 })
      
      if (!recent.body || !recent.body.items || recent.body.items.length === 0) {
        throw new Error('Hiç şarkı bulunamadı')
      }

      const track = recent.body.items[0].track
      return {
        songs: [{
          id: track.id,
          title: track.name,
          artist: track.artists.map(artist => artist.name).join(', '),
          genre: 'Pop',
          date: new Date(recent.body.items[0].played_at).toLocaleDateString('tr-TR'),
          thumbnail: track.album.images[0]?.url,
          url: track.external_urls.spotify,
          isPlaying: false
        }]
      }
    }

    // Şu an çalan şarkıyı formatla
    const track = current.body.item
    if ('artists' in track) {
      return {
        songs: [{
          id: track.id,
          title: track.name,
          artist: track.artists.map(artist => artist.name).join(', '),
          genre: 'Pop',
          date: new Date().toLocaleDateString('tr-TR'),
          thumbnail: track.album.images[0]?.url,
          url: track.external_urls.spotify,
          isPlaying: true
        }]
      }
    }

    throw new Error('Şarkı formatı geçersiz')

  } catch (error) {
    return {
      statusCode: 500,
      error: error instanceof Error ? error.message : 'Bilinmeyen hata',
      songs: []
    }
  }
}) 