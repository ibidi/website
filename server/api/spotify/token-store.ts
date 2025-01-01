import { writeFileSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'

const TOKENS_FILE = join(process.cwd(), 'spotify-tokens.json')

// Token'ları saklamak için basit bir store
class TokenStore {
  private static instance: TokenStore
  private accessToken: string | null = null
  private refreshToken: string | null = null
  private expirationTime = 0

  private constructor() {
    // Başlangıçta dosyadan token'ları yükle
    if (existsSync(TOKENS_FILE)) {
      try {
        const tokens = JSON.parse(readFileSync(TOKENS_FILE, 'utf-8'))
        this.accessToken = tokens.accessToken
        this.refreshToken = tokens.refreshToken
        this.expirationTime = tokens.expirationTime
      } catch (error) {
        console.error('Token dosyası okunamadı:', error)
      }
    }
  }

  static getInstance(): TokenStore {
    if (!TokenStore.instance) {
      TokenStore.instance = new TokenStore()
    }
    return TokenStore.instance
  }

  setTokens(accessToken: string, refreshToken: string, expiresIn: number) {
    this.accessToken = accessToken
    this.refreshToken = refreshToken
    this.expirationTime = Date.now() + expiresIn * 1000

    // Token'ları dosyaya kaydet
    try {
      writeFileSync(TOKENS_FILE, JSON.stringify({
        accessToken: this.accessToken,
        refreshToken: this.refreshToken,
        expirationTime: this.expirationTime
      }, null, 2))
    } catch (error) {
      console.error('Token dosyası yazılamadı:', error)
    }
  }

  getAccessToken(): string | null {
    return this.accessToken
  }

  getRefreshToken(): string | null {
    return this.refreshToken
  }

  getExpirationTime(): number {
    return this.expirationTime
  }

  clear() {
    this.accessToken = null
    this.refreshToken = null
    this.expirationTime = 0

    // Dosyayı da temizle
    try {
      if (existsSync(TOKENS_FILE)) {
        writeFileSync(TOKENS_FILE, '{}')
      }
    } catch (error) {
      console.error('Token dosyası temizlenemedi:', error)
    }
  }
}

export default TokenStore.getInstance() 