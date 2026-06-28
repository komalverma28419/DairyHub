import React from 'react'
import Title from '../ui/Title'
import TestimonialCard from '../ui/TestimonialCard'
import { testimonials } from '../../data/testimonialData'

const Testimonial = () => {
  return (
    <section className='py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 bg-linear-to-r from-[#FCFCFC] to-[#FFFFFF]'>
      <Title text="Our Testimonials" textAlign='center' lineAlign='center' lineWidth='w-40'/>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16'>
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} item={item}/>
        ))}
      </div>
    </section>
  )
}

export default Testimonial
