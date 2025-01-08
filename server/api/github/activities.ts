import { defineEventHandler } from 'h3'
import { Octokit } from '@octokit/rest'

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})

const USERNAME = 'ibidi' // GitHub kullanıcı adınızı buraya yazın

export default defineEventHandler(async () => {
  try {
    const { data } = await octokit.activity.listPublicEventsForUser({
      username: USERNAME,
      per_page: 5
    })

    return data.map(event => {
      let message = ''
      let repo = event.repo.name

      switch (event.type) {
        case 'PushEvent':
          const push = event.payload as any
          message = `${push.commits?.length || 0} commit yaptı`
          break
        case 'CreateEvent':
          const create = event.payload as any
          message = `Yeni bir ${create.ref_type} oluşturdu`
          break
        case 'PullRequestEvent':
          const pr = event.payload as any
          message = `Pull request ${pr.action}`
          break
        case 'IssuesEvent':
          const issue = event.payload as any
          message = `Issue ${issue.action}`
          break
        case 'WatchEvent':
          message = 'Bir repoyu yıldızladı'
          break
        default:
          message = 'Bir aktivite gerçekleştirdi'
      }

      return {
        type: event.type,
        message,
        repo,
        url: `https://github.com/${repo}`,
        created_at: event.created_at
      }
    })
  } catch (error) {
    console.error('GitHub API hatası:', error)
    throw createError({
      statusCode: 500,
      message: 'GitHub aktiviteleri alınırken bir hata oluştu'
    })
  }
})
