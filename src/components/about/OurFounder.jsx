import React from 'react'
import CEO from "../../assets/images/CEO.jpg"
import founderBg from "../../assets/images/founderBg.png"

const OurFounder = () => {
  return (
    <section className='py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 bg-no-repeat bg-cover'
     style={{backgroundImage: `url(${founderBg})`}}>
      <div className='grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10 justify-items-end'>
        <div>
            <p className='text-font text-xl md:text-2xl'>Meet our Founder and CEO</p>
            <h3 className='font-bold text-2xl md:text-3xl text-primary mt-2'>Ms. Poonam Verma</h3>
            <p className='text-sm md:text-base text-[#606060] leading-7 mt-8'>She commenced his dairy journey with around 20 cows and later accelerated his passion and
               turned it into a huge dairy farm situated in Noida in a pleasant, lush-green surrounding
               with 200+ cows grazing in it. With the goal of starting 100 Gaushalas in India, this lady
               seems to be unstoppable.
            </p>
        </div>
        <div>
            <div className='w-65 h-65 md:w-77 md:h-77 lg:w-85 lg:h-85 bg-[#D2E1FF] rounded-full flex items-end'>
                <img src={CEO} alt="CEO-Image" className='w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full'/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default OurFounder
