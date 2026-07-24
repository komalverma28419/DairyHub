import React from 'react'
import getTouch from "../../assets/images/getTouch.png"
import Title from '../ui/Title'
import Button from '../ui/Button'

const GetInTouch = () => {
  const inputClass = "w-full border border-[#C8C8C8] rounded-md px-4 py-3 outline-none placeholder:text-[#646464] focus:border-[#383434] transition-all duration-200"
  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <section className='max-w-7xl mx-auto py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='flex items-center justify-center md:justify-start'>
            <img src={getTouch} alt="get in touch" className=''/>
        </div>
        <div className='flex flex-col'>
            <Title text="Get In Touch"/>
            <form className='mt-8 space-y-5  max-w-[524px]' onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Your Full Name 'required className={inputClass}/>
                <input type="tel" placeholder='Enter Your Mobile Number' required className={inputClass}/>
                <input type="email" placeholder='Enter Your Email'required className={inputClass}/>
                <textarea name="" id="" placeholder='Your Message..' rows={3} className={inputClass}></textarea>
                <Button text="SUBMIT" size='lg' type='submit'/>
            </form>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
