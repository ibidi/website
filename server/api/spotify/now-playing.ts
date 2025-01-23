import { defineEventHandler } from 'h3'
import SpotifyWebApi from 'spotify-web-api-node'
import tokenStore from './token-store'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/api/spotify/callback'
})

let lastTrackId: string | null = null

async function refreshAccessToken() {
  try {
    const refreshToken = tokenStore.getRefreshToken()
    if (!refreshToken) {
      throw new Error('Refresh token bulunamadı')
    }

    spotifyApi.setRefreshToken(refreshToken)
    const data = await spotifyApi.refreshAccessToken()
    
    tokenStore.setTokens(
      data.body.access_token,
      refreshToken,
      data.body.expires_in
    )
    
    spotifyApi.setAccessToken(data.body.access_token)
    return true
  } catch (error) {
    console.error('Token yenileme hatası:', error)
    return false
  }
}

export default defineEventHandler(async () => {
  try {
    const accessToken = tokenStore.getAccessToken()
    const expirationTime = tokenStore.getExpirationTime()

    if (!accessToken || Date.now() >= expirationTime) {
      const success = await refreshAccessToken()
      if (!success) {
        return {
          isPlaying: false,
          song: null
        }
      }
    } else {
      spotifyApi.setAccessToken(accessToken)
    }

    const data = await spotifyApi.getMyCurrentPlayingTrack()
    
    if (!data.body || !data.body.is_playing || !data.body.item) {
      return {
        isPlaying: false,
        song: null
      }
    }

    const track = data.body.item
    if ('artists' in track && 'album' in track) {
      if (track.id !== lastTrackId) {
        lastTrackId = track.id
        console.log('Yeni şarkı:', track.name)
      }

      return {
        isPlaying: true,
        song: {
          title: track.name,
          artist: track.artists[0].name,
          albumArt: track.album.images[0].url,
          url: track.external_urls.spotify
        }
      }
    }

    return {
      isPlaying: false,
      song: null
    }
  } catch (error) {
    console.error('Spotify API hatası:', error)
    return {
      isPlaying: false,
      song: null
    }
  }
}) 