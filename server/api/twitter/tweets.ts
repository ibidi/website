import { defineEventHandler } from 'h3'
import { TwitterApi } from 'twitter-api-v2'

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY as string,
  appSecret: process.env.TWITTER_API_SECRET as string,
  accessToken: process.env.TWITTER_ACCESS_TOKEN as string,
  accessSecret: process.env.TWITTER_ACCESS_SECRET as string,
})

const USERNAME = 'ibidi' // Twitter kullanıcı adınızı buraya yazın

export default defineEventHandler(async () => {
  try {
    const tweets = await client.v2.userByUsername(USERNAME).then(user => {
      return client.v2.userTimeline(user.data.id, {
        max_results: 5,
        'tweet.fields': ['created_at', 'public_metrics']
      })
    })

    const formattedTweets = tweets.data.data.map(tweet => ({
      text: tweet.text,
      likes: tweet.public_metrics?.like_count || 0,
      retweets: tweet.public_metrics?.retweet_count || 0,
      created_at: tweet.created_at
    }))

    return formattedTweets
  } catch (error) {
    console.error('Twitter API hatası:', error)
    throw createError({
      statusCode: 500,
      message: 'Tweetler alınırken bir hata oluştu'
    })
  }
})
