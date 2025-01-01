import { defineEventHandler, getQuery, sendRedirect } from 'h3'
import SpotifyWebApi from 'spotify-web-api-node'
import tokenStore from './token-store'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/api/spotify/callback'
})

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const code = query.code as string

    console.log('Authorization code alındı:', code)

    const data = await spotifyApi.authorizationCodeGrant(code)
    
    console.log('Token\'lar alındı:', {
      accessToken: data.body.access_token.slice(0, 10) + '...',
      refreshToken: data.body.refresh_token.slice(0, 10) + '...',
      expiresIn: data.body.expires_in
    })

    // Token'ları store'a kaydet
    tokenStore.setTokens(
      data.body.access_token,
      data.body.refresh_token,
      data.body.expires_in
    )

    // Kaydedilen token'ları kontrol et
    console.log('Token\'lar store\'a kaydedildi:', {
      accessToken: tokenStore.getAccessToken()?.slice(0, 10) + '...',
      refreshToken: tokenStore.getRefreshToken()?.slice(0, 10) + '...',
      expirationTime: new Date(tokenStore.getExpirationTime()).toISOString()
    })

    // API için de token'ları ayarla
    spotifyApi.setAccessToken(data.body.access_token)
    spotifyApi.setRefreshToken(data.body.refresh_token)

    // Başarılı yetkilendirme sonrası ana sayfaya yönlendir
    return sendRedirect(event, '/')
  } catch (error) {
    console.error('Yetkilendirme hatası:', error)
    return sendRedirect(event, '/?error=auth_failed')
  }
}) 