import { defineEventHandler } from 'h3'
import tokenStore from './token-store'

export default defineEventHandler(async () => {
  const accessToken = tokenStore.getAccessToken()
  return accessToken
}) 