import React from 'react'
import AboutHero from '../components/about/AboutHero'
import OurTeam from '../components/shared/OurTeam'
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
      <OurTeam title="Our Team"/>
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
