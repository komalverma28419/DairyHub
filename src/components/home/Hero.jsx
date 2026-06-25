import React from 'react'
import BgImg from '../../assets/images/bg-sec-1.png'
import HeroImg from "../../assets/images/hero-img.png"
import Button from '../ui/Button'

const Hero = () => {
  return (
    <section className='py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 bg-cover bg-center bg-no-repeat 
    min-h[70vh] lg:min-h-screen flex items-center' style={{backgroundImage: `url(${BgImg})`}}>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
        <div className='max-w-lg flex flex-col items-start '>
            <h1 className='text-4xl md:text-[40px] lg:text-5xl xl:text-6xl leading-12 md:leading-14 lg:leading-18 mb-6'>
                <span className='text-[#313131] font-bold'>Your Formula</span> 
                <span className='text-[#2C8351] font-extrabold'> For <br />Dairy Success</span>
            </h1>
            <p className='text-[#212121] text-sm md:text-base lg:text-lg xl:text-xl leading-6 lg:leading-8 mb-8'>SwadeshiVip is a state-of-the-art, SaaS platform that empowers you to manage customer 
            subscriptions and deliveries with unrivalled efficiency. From the heart of the farm to the 
            customers’ doorstep.
            </p>
            <Button text="GET STARTED" variant='secondary'/>
        </div>
        <div className='flex items-center'><img src={HeroImg} alt="" /></div>
    </div>
    </section>
  )
}

export default Hero
