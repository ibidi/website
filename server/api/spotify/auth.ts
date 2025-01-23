import { defineEventHandler, getMethod } from 'h3'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/api/spotify/callback'
})

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played'
]

const tokenStore = {
  clear: () => {
    // implement token clearing logic here
  }
}

// Auth endpoint
export const authHandler = defineEventHandler(() => {
  const authorizeURL = spotifyApi.createAuthorizeURL(scopes, 'state')
  return { url: authorizeURL }
})

// Clear tokens endpoint
export const clearTokensHandler = defineEventHandler(async (event) => {
  const method = getMethod(event)
  
  if (method === 'POST') {
    tokenStore.clear()
    return { message: 'Tokens cleared successfully' }
  }

  return { message: 'Invalid method' }
})