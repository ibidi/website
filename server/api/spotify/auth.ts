import { defineEventHandler } from 'h3'
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

export default defineEventHandler(() => {
  const authorizeURL = spotifyApi.createAuthorizeURL(scopes, 'state')
  return { url: authorizeURL }
}) 