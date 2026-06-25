import React, { useState } from 'react'
import Title from '../ui/Title'
import { faqs } from '../../data/faqData'
import dropdown from "../../assets/images/dropdown.png"

const FrequentlyAsk = () => {
  const[activeIndex, setActiveIndex] = useState(0)
  const handleToggle = (index) =>{
    setActiveIndex(activeIndex === index ? null : index)
  }
  return (
    <section className='py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 flex flex-col items-center'>
      <Title text="FAQ’s" textAlign='center' lineAlign='center'/>
      <div className='w-3xl'>
        {faqs.map((item,index) =>(
          <div key={index} className='border-b border-[#D9D9D9]'>
            <button onClick={() => handleToggle(index)}
            className='w-full flex items-center justify-between gap-6 text-left p-6'>
              <h3 className={` font-semibold text-base text-[#6A6A6A] 
                ${activeIndex === index ? "border-b border-[#5A5A5A]" :""}`}>
                {item.question}
              </h3>
              <div className='shrink-0 flex items-center justify-center w-7 h-7 rounded-full cursor-pointer bg-[#FFF2F1]'>
                  <img src={dropdown} alt="dropdown" className={`dropdown transition-transform duration-300
                    ${activeIndex === index ? "rotate-180" : ""}`}/>                  
              </div>
            </button>
            <div  className={`text-sm text-[#606060] overflow-hidden transition-all duration-300 ease-in-out
             ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className='pl-6 pr-10 pb-6'>{item.answer}</p>
            </div>     
      </div>
        ))}
      </div>
    </section>
  )
}

export default FrequentlyAsk
