import React from 'react'
import AboutHero from '../components/about/AboutHero'
import OurTeam from '../components/about/OurTeam'
import MeetClients from '../components/shared/MeetClient'
import News from '../components/shared/News'
import OurFounder from '../components/about/OurFounder'
import Testimonial from '../components/shared/Testimonial'
import NewsLetter from '../components/shared/NewsLetter'
import GetInTouch from '../components/shared/GetInTouch'

const Aboutpage = () => {
  return (
    <>
      <AboutHero/>
      <OurTeam/>
      <OurFounder/>
      <MeetClients/> 
      <News/>
      <Testimonial/>
      <NewsLetter/>
      <GetInTouch/>
    </>
  )
}

export default Aboutpage
