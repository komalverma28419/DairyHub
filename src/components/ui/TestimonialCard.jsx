import React from 'react'
import StarRating from './StarRating'

const TestimonialCard = ({item}) => {
  return (
   
    <div className='relative bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] space-y-5'>
        <div className='flex justify-end items-center'>
            <StarRating rating={item.rating}/>
        </div>
        <div className='absolute -top-8 left-6'>
            <img src={item.image} alt={item.name} className='w-16 h-16 rounded-full shadow-md'/>  
        </div>
        <div className='space-y-3'>
            <p className='text-sm text-[#565656]'>{item.text}</p>
            <p className='font-semibold text-[#242424]'>{item.name}</p>
        </div>
    </div>
  )
}

export default TestimonialCard
