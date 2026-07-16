import React from 'react'

const EnquiryCard = ({image, title, contactNo, email}) => {
  return (
    <div className='bg-radial from-[#F0F5FF] to-[#E6EEFF] py-6 px-2 rounded-2xl 
    shadow-[-2px_4px_6px_0_#78787840] cursor-pointer'>
      <div className='flex items-center justify-center'>
        <div className='w-12 h-12 rounded-full bg-[#4081FF1F] flex items-center justify-center p-1'>
            <img src={image} alt={title} className='' />
        </div>
      </div>
      <div className='text-font md:text-base flex flex-col items-center gap-0.5 mt-4'>
        <p className='text-dark font-semibold text-lg xl:text-xl'>{title}</p>
        <p>{email}</p>
        <p>{contactNo}</p>
      </div>
    </div>
  )
}

export default EnquiryCard
