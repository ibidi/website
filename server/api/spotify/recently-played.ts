import tokenStore from './token-store'

export default defineEventHandler(async (event) => {
  try {
    const accessToken = tokenStore.getAccessToken()
    
    if (!accessToken) {
      throw new Error('No access token available')
    }
    
    const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=10', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data

  } catch (error: any) {
    console.error('Error fetching recently played tracks:', error)
    return {
      error: 'Failed to fetch recently played tracks',
      details: error.message
    }
  }
}) 