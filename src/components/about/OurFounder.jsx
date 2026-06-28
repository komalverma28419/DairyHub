import React from 'react'
import CEO from "../../assets/images/CEO.jpg"
import founderBg from "../../assets/images/founderBg.png"
import { Circle, Plus,} from 'lucide-react'

const OurFounder = () => {
const pluses = [
  "top-40 left-[68%] text-primary",
  "top-10 left-[35%] text-[#FF5150]",
  "top-0 right-0 text-primary",
  "bottom-12 left-5 text-[#FF5150]",
]
  return (
    <section className='py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 bg-no-repeat bg-cover'
     style={{backgroundImage: `url(${founderBg})`}}>
      <div className='relative grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10 justify-items-end'>
        <div>
            <p className='text-font text-xl md:text-2xl'>Meet our Founder and CEO</p>
            <h3 className='font-bold text-2xl md:text-3xl text-primary mt-2'>Ms. Poonam Verma</h3>
            <p className='relative z-20 text-sm md:text-base text-[#606060] leading-7 mt-8'>She commenced his dairy journey with around 20 cows and later accelerated his passion and
               turned it into a huge dairy farm situated in Noida in a pleasant, lush-green surrounding
               with 200+ cows grazing in it. With the <span className='font-bold text-primary'>goal </span>
               of starting <span className='font-bold text-primary'>100 Gaushalas in India</span>, this lady
               seems to be <span className='text-primary font-bold'>unstoppable</span>.
            </p>
        </div>
        <div>
            <div className='w-65 h-65 md:w-77 md:h-77 lg:w-85 lg:h-85 bg-[#D2E1FF] rounded-full flex items-end'>
                <img src={CEO} alt="CEO-Image" className='w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full'/>
            </div>
        </div>
        {pluses.map((position, index) => (
            <Plus
            key={index}
            size={20}
            className={`absolute ${position}`}/>
        ))}
        <Circle className='absolute text-primary top-0 left-[54%] ' size={50} strokeWidth={1.5}/>
        <Circle className='absolute fill-blue-200 top-25 left-7 z-0' strokeWidth={0} size={50}/>
      </div>
    </section>
  )
}

export default OurFounder
