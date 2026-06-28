import React from 'react'
import checkIcon from "../../assets/images/checkIcon.png"
import closeIconList from "../../assets/images/closeIconList.png"
import { features } from '../../data/pricingData'


const PricingCard = ({plan, isYearly}) => {
    const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
    const isHighlighted = plan.highlighted

  return (
    <div className={`px-6 py-10 rounded-lg transition-all duration-300 hover:-translate-y-2
        ${isHighlighted ? "bg-[#E04943] shadow-[0px_12px_26px_0_#FF9B97] text-white -translate-y-3"
         :"bg-white shadow-[0px_1px_2.4px_0_#9A9A9A40]"}`}>
      <h3 className={`text-xl md:text-2xl font-bold mb-3 ${isHighlighted ? "text-white" : "text-neutral-800"}`}>
        {plan.title}
      </h3>
      <p className={`mb-3 text-sm lg:text-base ${isHighlighted ? "text-neutral-50" : "text-[#64748B]"}`}>{plan.description}</p>
      <div>
        <h2><span className="text-4xl lg:text-[56px] font-semibold tracking-[0.5%]">₹{price} </span>
            <span className={` text-sm lg:text-base font-light ${isHighlighted ? "text-neutral-50" : "text-neutral-600"}`}>
                / {isYearly ? "Year" : "Month"}
            </span>
        </h2>
      </div>
      <div className=' mt-4'>
       <button className={`w-full py-2 rounded-lg text-[#DE3E38] hover:opacity-95 cursor-pointer transition 
        ${isHighlighted ? "bg-white shadow-[0px_6px_5px_0_#24242440]" 
            :"border-[1.5px] border-[#DE3E38] hover:bg-[#DE3E38] hover:text-white hover:shadow-[0px_2px_5px_0_#24242440]"}
        `}>
          Get Started Now
       </button>
      </div>
      <ul className='flex flex-col gap-3 mt-10'>
        {features.map((feature, index) =>{
            const isAvailable = plan.permissions[index]
            return(
                <li key={index} className='flex items-center gap-2 lg:gap-4 '>
                    <div className='lg:w-8 lg:h-8 w-7 h-7 rounded-full bg-[#FFF2F1] flex items-center justify-center shrink-0'>
                        <img src={isAvailable ? checkIcon : closeIconList} alt="icon" className='shrink-0'/>
                    </div>
                    <span className={`text-sm lg:text-[15px] ${isAvailable ? "text-neutral-800" :"text-neutral-400"} 
                    ${isHighlighted ? "text-white" :""}`}>
                        {feature}
                    </span>
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default PricingCard
