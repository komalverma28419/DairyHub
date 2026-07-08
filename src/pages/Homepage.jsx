import React from 'react'
import Hero from '../components/home/Hero'
import AboutUs from '../components/shared/AboutUs'
import Benefits from '../components/home/Benefits'
import News from '../components/shared/News'
import Brand from '../components/home/Brand'
import Achievement from '../components/home/Achievement'
import Pricing from '../components/home/Pricing'
import Features from '../components/home/Features'
import MeetClients from '../components/shared/MeetClient'
import FrequentlyAsk from '../components/home/FrequentlyAsk'
import Testimonial from '../components/shared/Testimonial'
import NewsLetter from '../components/shared/NewsLetter'
import GetInTouch from '../components/shared/GetInTouch'






const Homepage = () => {
  return (
    <>
      <Hero/>
      <AboutUs/>
      <Benefits/>
      <News/>
      <Brand/>
      <Achievement/>
      <Pricing/>
      <Features/>
      <MeetClients/>
      <FrequentlyAsk/>
      <Testimonial/>
      <NewsLetter/>
      <GetInTouch/>
    </>
  )
}

export default Homepage
