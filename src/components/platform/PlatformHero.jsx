import React from 'react'
import platformImg from "../../assets/images/platformImg.png"
import platformImg2 from "../../assets/images/platformImg2.png"

const PlatformHero = () => {
  return (
    <section className='relative overflow-hidden py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 bg-[#F9FBFF] h-full'>
        <div className='text-center '>
            <h1 className='font-bold text-4xl'>
                <span className='text-dark'>Our </span>
                <span className='text-primary'>Product Portfolio</span>
            </h1>
            <p className='text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 leading-8 mt-2'>
                "Fully Customized Mobile App Solutions For <br />Your Business"
            </p>
            <div className='absolute -top-10 right-0'>
                <img src={platformImg} alt="" className=''/>
            </div>
            <div className='absolute bottom-0 left-0'><img src={platformImg2} alt="" /></div>
        </div>
    </section>
  )
}

export default PlatformHero
