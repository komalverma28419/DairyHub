import React from 'react'
import pdfIcon from '../../assets/images/pdfIcon.png'
import dotImage from '../../assets/images/dotImage.png'

const AchievementCard = ({index = 0}) => {
  const isEven = index % 2 === 0
  return (
    <div className='relative w-fit cursor-pointer'>
      <div className='flex gap-6 bg-linear-to-r from-[#FF7570] to-[#E04740]
      rounded-xl px-6 py-5 border-4 border-[#F6F6F6] shadow-[-18px_18px_32px_0px_#55555524] text-white
      transition-all duration-300 hover:shadow-[-25px_25px_40px_0px_#0000002a] hover:-translate-y-1'>
        <div className='bg-[#FFF0F0] p-2.5 rounded-md flex items-center'>
            <img src={pdfIcon} alt="" className='w-full'/>
        </div>
      <div className='flex flex-col items-end justify-center font-sm'>
        <p className='font-medium'>Active Milk Users</p>
        <p className='font-bold '>22,756</p>
      </div>
      </div>
      <div className={`absolute ${
        isEven ? "top-2 right-2" : "bottom-2 left-2 rotate-180"
      }`}>
        <img src={dotImage} alt=""  className='w-full'/>
      </div>
    </div>
  )
}

export default AchievementCard
