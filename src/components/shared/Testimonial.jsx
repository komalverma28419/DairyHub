import React, { useEffect, useState } from 'react'
import Title from '../ui/Title'
import TestimonialCard from '../ui/TestimonialCard'
import { testimonials } from '../../data/testimonialData'
import preVector from "../../assets/images/preVector.png"
import nextVector from "../../assets/images/nextVector.png"

const Testimonial = () => {
  const[startIndex, setStartIndex] = useState(0)
  const[activeBtn, setActiveBtn] = useState("next")
  const[cardToShow, setCardToShow] = useState(3)

  useEffect(() =>{
    const handleResize = () =>{
      if (window.innerWidth >= 1024){
        setCardToShow(3)
      } else if(window.innerWidth >= 768){
        setCardToShow(2)
      }else{
        setCardToShow(1)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
  },[])

  const visibleTestimonial = testimonials.slice(startIndex, startIndex + cardToShow)

  const handleNext = () => {
    if(startIndex < testimonials.length - cardToShow){
      setStartIndex((prev) =>prev + 1)
      setActiveBtn("next")
    }
  }
  const handlePrev= () => {
    if(startIndex > 0){
      setStartIndex((prev) =>prev - 1)
      setActiveBtn("prev")
    }
  }
  return (
    <section className='max-w-7xl mx-auto py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 bg-linear-to-r from-[#FCFCFC] to-[#FFFFFF]'>
      <Title text="Our Testimonials" textAlign='center' lineAlign='center' lineWidth='w-40'/>
      <div className='flex gap-8'>
        <div className='flex items-center mt-14'>
        <button onClick={handlePrev} disabled={startIndex === 0} alt="prev" className={`w-8 h-8 rounded-full cursor-pointer flex items-center 
                justify-center ${activeBtn === "prev" ? "bg-[#DE3E38]" : "bg-[#f0807c]"} `}>
                    <img src={preVector} />
        </button>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16'>
        {visibleTestimonial.map((item, index) => (
          <TestimonialCard key={index} item={item}/>
        ))}
      </div>
      <div className='flex items-center mt-14'>
        <button onClick={handleNext} disabled={startIndex >= testimonials.length - cardToShow} className={`w-8 h-8 rounded-full cursor-pointer flex items-center 
          justify-center  ${activeBtn === "next" ? "bg-[#DE3E38]" : "bg-[#f0807c] "}`}>
          <img src={nextVector} alt="next" />
        </button>
      </div>
      </div>
    </section>
  )
}

export default Testimonial
