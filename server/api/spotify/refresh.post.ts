import { defineEventHandler } from 'h3'
import tokenStore from './token-store'

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET

export default defineEventHandler(async (event) => {
  const refreshToken = tokenStore.getRefreshToken()
  
  if (!refreshToken) {
    throw new Error('No refresh token available')
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    })
  })

  if (!response.ok) {
    throw new Error('Failed to refresh token')
  }

  const data = await response.json()
  
  // Yeni access token'ı kaydet
  tokenStore.setTokens(
    data.access_token,
    refreshToken, // Mevcut refresh token'ı koru
    data.expires_in
  )

  return { accessToken: data.access_token }
})
