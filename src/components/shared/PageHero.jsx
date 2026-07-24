import React from 'react'
import platformImg from "../../assets/images/platformImg.png"
import platformImg2 from "../../assets/images/platformImg2.png"

const PageHero = ({children, description}) => {
  return (
    <section className='max-w-7xl mx-auto relative overflow-hidden py-12 md:py-16 px-6 md:px-10 lg:px-16 
    xl:px-20 bg-[#F9FBFF] h-full'>
        <div className='text-center '>
            <h1 className='font-bold text-xl lg:text-3xl'>
                {children}
            </h1>
            <p className='text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 leading-8 mt-2'>
                {description}
            </p>
            <div className='absolute -top-14 -right-40 sm:-right-28 lg:right-0'>
                <img src={platformImg} alt="" className=''/>
            </div>
            <div className='absolute -bottom-8 md:bottom-0 -left-8 sm:left-0'>
                <img src={platformImg2} alt="" />
            </div>
        </div>
    </section>
  )
}

export default PageHero
