import React from 'react'


const FeatureCard = ({feature}) => {
  return (
    <div className='space-y-3 bg-white rounded-2xl p-6  shadow-[8px_8px_12px_0_#FF5F5F1B] flex 
    flex-col items-center cursor-pointer transition-all duration-300 group hover:scale-105'>
      <div className=' w-14 h-14 flex items-center justify-center rounded-xl border-[#F6F6F6] 
       bg-[#f0807c] group-hover:bg-linear-to-r group-hover:from-[#FF7570] group-hover:to-[#E04740]
       group-hover:shadow-[4px_-4px_8px_0_#5A5A5A1A]  '>
        <img src={feature.Icon} alt="" className=''/>
      </div>
      <h3 className='text-center text-[#323232] font-semibold text-lg lg:text-xl'>{feature.title}</h3>
      <p className='text-gray-700 text-sm text-center'>{feature.description}</p>
    </div>
  )
}

export default FeatureCard
//bg-linear-to-r from-[#FF7570] to-[#E04740] shadow-[4px_-4px_8px_0_#5A5A5A1A] 