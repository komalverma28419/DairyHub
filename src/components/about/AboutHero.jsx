import React from 'react'
import aboutHero from "../../assets/images/aboutHero.png"
import imgAbout from "../../assets/images/img-about.png"
import Button from '../ui/Button'

const AboutHero = () => {
  return (
    <section className='max-w-7xl mx-auto relative py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 bg-radial from-[#FBFFFF] to-[#F0FFFF]'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        <div className=' flex flex-col items-start '>
          <h1 className='text-4xl md:text-[40px] lg:text-5xl xl:text-6xl font-bold mb-6 leading-12 md:leading-14 lg:leading-18'>
            <span className='text-dark'>About</span> <span className='text-secondary'>Us</span></h1>
          <p className='text-[#363636] text-sm md:text-base lg:text-lg xl:text-xl leading-6 lg:leading-8 mb-8'>
           DairyHub helps dairy businesses simplify subscription management, streamline deliveries, 
           and build stronger customer relationships through an innovative SaaS platform that improves
            efficiency and automation.
          </p>
          <Button text="GET STARTED" variant='secondary'  size="lg"/>

        </div>
        <div className='flex items-start'>
          <img src={aboutHero} alt="aboutHero-image" />
        </div>
      </div>
      <div className='absolute bottom-0 left-0'><img src={imgAbout} alt="" /></div>
    </section>
  )
}

export default AboutHero
