import React from 'react'
import { Outlet } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import AboutUs from '../components/shared/AboutUs'
import OurApplications from '../components/platform/OurApplications'
import OurTeam from '../components/shared/OurTeam'
import News from '../components/shared/News'
import NewsLetter from '../components/shared/NewsLetter'


const PlatformPage = () => {
  return (
    <div>
      <Outlet/>
      <PageHero description={<>Fully Customized Mobile App Solutions For <br /> Your Business</>}>
         <span className='text-dark'>Our </span>
          <span className='text-primary'>Product Portfolio</span>
      </PageHero>
      <AboutUs/>
      <OurApplications/>
      <OurTeam title="Our Team Members"/>
      <News/>
      <NewsLetter/>
    </div>
  )
}

export default PlatformPage
