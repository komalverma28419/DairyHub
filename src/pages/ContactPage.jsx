import React from 'react'
import PageHero from '../components/shared/PageHero'
import GetInTouch from '../components/shared/GetInTouch'
import GeneralEnquiry from '../components/contact/GeneralEnquiry'
import News from '../components/shared/News'
import NewsLetter from '../components/shared/NewsLetter'

const ContactPage = () => {
  return (
    <>
      <PageHero description="How Can We Help">
          <span className='text-primary'>Get In Touch </span>
          <span className='text-dark'>With Us</span>
      </PageHero>
      <GetInTouch/>
      <GeneralEnquiry/>
      <News/>
      <NewsLetter/>
    </>
  )
}

export default ContactPage
