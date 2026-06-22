import React from 'react'
import Title from '../ui/Title'
import benefitsSection from '../../assets/images/benefitsSection.png'
import benefitSidebar from '../../assets/images/benefitSidebar.png'
import listIcon from '../../assets/images/listIcon.png' 


const Benefits = () => {
  const benefits = [
    "Minimum Set-up cost",
    "Easy Integration",
    "Cloud based Access",
    "High Security",
    "Scalable System",
    "24/7 Support"
  ]
  return (
    <section className='relative py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 bg-[#FEF8F8CC]'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
        <div className='lg:col-span-6'>
            <Title text='Benefits of SaaS Solution'/>
            <p className='leading-6 md:leading-7.5 mt-8 text-sm md:text-[15px] lg:text-base font-medium 
            text-[#5C5C5C]'>Farm to glass, SaaS manages everything Dairy in
             your businessFarm to glass, production to consumption, SaaS manages everything Dairy Farm to 
                glass, production to consumption, SaaS manages everything Farm to glass, production to 
                consumption, SaaS manages everything Dairy.
            </p>

            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-6 mt-8'>
              {benefits.map((list, index) => (
                <li key={index} className='flex items-center gap-4 bg-[#FFFDFD] py-4 px-5 rounded-xl
                shadow-[6px_6px_20px_0px_rgba(255,95,95,0.12)] hover:shadow-[8px_8px_25px_rgba(255,95,95,0.18)] 
                transition-all duration-300 cursor-pointer flex-nowrap'>
                  <img src={listIcon} alt='icon' className='w-8 h-8'/>
                  <span className='text-sm xl:text-base font-medium text-[#313131]'>{list}</span>
                </li>
              ))}
              
            </ul>
        </div>
        <div className='w-full flex items-center justify-center lg:col-span-6'><img src={benefitsSection} alt="benefits-image" /></div>
      </div>
      <img src={benefitSidebar} alt="" className='absolute right-4 top-0 h-full hidden xl:block pointer-events-none'/>
    </section>
  )
}

export default Benefits
