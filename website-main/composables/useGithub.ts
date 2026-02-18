interface Repository {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  language: string | null
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string
  archived: boolean
  disabled: boolean
  fork: boolean
}

export const useGithub = () => {
  const config = useRuntimeConfig()
  const username = config.public.githubUsername

  const getRepositories = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
      const repositories: Repository[] = await response.json()

      // Fork olmayan ve arşivlenmemiş repoları filtrele
      return repositories
        .filter(repo => !repo.fork && !repo.archived && !repo.disabled)
        .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
    } catch (error) {
      console.error('GitHub API error:', error)
      return []
    }
  }

  return {
    getRepositories
  }
} 