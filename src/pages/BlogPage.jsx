import React from 'react'
import LatestPost from '../components/news/LatestPost'
import PageHero from '../components/shared/PageHero'
import News from '../components/shared/News'
import NewsLetter from '../components/shared/NewsLetter'

const BlogPage = () => {
  return (
    <>
      <PageHero  description="THE WORLD IS TALKING ABOUT US">
          <span className='text-primary'>DAIRYHUB </span>
          <span className='text-dark'>IN PUBLICATIONS</span>
      </PageHero>
      <LatestPost/>
      <News/>
      <NewsLetter/>
    </>
  )
}

export default BlogPage
