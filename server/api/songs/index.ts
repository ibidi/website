import { readFileSync } from 'fs'
import { resolve } from 'path'

export default defineEventHandler(async (event) => {
  try {
    // JSON dosyasını oku
    const filePath = resolve(process.cwd(), 'data/songs.json')
    const fileContent = readFileSync(filePath, 'utf-8')
    const data = JSON.parse(fileContent)

    return {
      songs: data.songs
    }
  } catch (error) {
    // Hata durumunda 500 status code ile yanıt dön
    event.node.res.statusCode = 500
    
    return {
      statusCode: 500,
      error: error instanceof Error ? error.message : 'Bilinmeyen hata',
      songs: []
    }
  }
}) 