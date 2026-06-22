import React from 'react'
import aboutImage from '../../assets/images/aboutImage.png'
import Title from '../ui/Title'

const AboutUs = () => {
  return (
    <section className='py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='flex items-center'>
            <img src={aboutImage} alt="about-image" />
        </div>
        <div className='flex flex-col justify-center'>
            {/* <h3 className='relative text-3xl font-bold text-[#313131]'> 
                About us
                <span className='absolute bg-[#DE3E38] w-16 h-1 rounded-sm left-0 -bottom-1'></span>
            </h3> */}
            <Title text="About us" />
            <p className=' leading-6 md:leading-7.5 mt-8 text-sm md:text[15px] lg:text-base'><span className='font-bold text-[#2C8351]'>Dairy business</span>
            <span className='font-medium text-[#383838]'> in india rule the country Economy but this industry is still far from the 
                Scope of IT Revolution which happen in India and no one has taken it seriously so we 
                decided to do it, Two person one from Village level and related to dairy Industry and the 
                the other a techie geek started this venture and now ruling the space. We Started the Firm 
                by name Loopsys Technologies situated in Indore and created the Product Liter. We Initiated 
                the digitisation of the farmer through the dairy industry and still walking on the path and 
                yet new milestones to reach.</span>
            </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
