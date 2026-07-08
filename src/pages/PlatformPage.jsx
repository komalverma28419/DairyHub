import React from 'react'
import { Outlet } from 'react-router-dom'
import PlatformHero from '../components/platform/PlatformHero'
import AboutUs from '../components/shared/AboutUs'
import OurApplications from '../components/platform/OurApplications'
import OurTeam from '../components/shared/OurTeam'
import News from '../components/shared/News'
import NewsLetter from '../components/shared/NewsLetter'



const PlatformPage = () => {
  return (
    <div>
      <Outlet/>
      <PlatformHero/>
      <AboutUs/>
      <OurApplications/>
      <OurTeam title="Our Team Members"/>
      <News/>
      <NewsLetter/>
    </div>
  )
}

export default PlatformPage
