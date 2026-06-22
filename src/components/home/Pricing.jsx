import React, { useState } from 'react'
import Title from '../ui/Title'
import Toggle from '../ui/Toggle'
import PricingCard from '../ui/PricingCard';
import { pricingPlans } from '../../data/pricingData';
import offerIndicator from "../../assets/images/offerIndicator.png"



const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false)
  return (
    <section className='py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 bg-[#FBFBFB]'>
      <div className='relative flex flex-col gap-8 mb-16 lg:mb-20'>
        <Title text='Choose Your Plan' textAlign='center' lineAlign='center' lineWidth='w-32'/>
        <Toggle isYearly={isYearly} setIsYearly={setIsYearly}/>
        <img src={offerIndicator} alt="offerIndicator" className='absolute left-[80%] sm:left-[68%] md:left-[60%] mt-18 w-18 md:w-22'/>
      </div>
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            isYearly={isYearly}
          />
        ))}
      </div>
    </section>
  )
}

export default Pricing
