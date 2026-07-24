import React from 'react'
import demoImage from '../../assets/images/demoImage.png'
import { IoArrowBack } from 'react-icons/io5'
import Button from '../ui/Button'
import { useNavigate } from 'react-router-dom'

const RequestDemoForm = () => {
    const navigate = useNavigate()

    const inputClass = 'w-full border-[0.6px] border-[#E2E2E2] rounded px-4 py-3 outline-none placeholder:text-[#555555] focus:border-primary transition-all shadow-[0px_0px_2px_0_#0000001F]'
    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate('/thankyou')
    }
    const handleBack = () =>{
        if(window.history.length > 1){
            navigate(-1)
        }else{
            navigate('/')
        }
    }
  return (
    <section className='max-w-7xl mx-auto py-10 px-6 md:px-10 lg:px-16 xl:px-20 bg-[#FBFBFB]'>
        <button className='mb-8  w-11 h-11 rounded-full border border-gray-200 hover:bg-gray-200 flex items-center justify-center  transition' onClick={handleBack}>
            <IoArrowBack size={20}/>
        </button>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            <div className='max-w-md'>
                <p className='text-[#707070]  text-sm md:text-base'>REQUEST A DEMO</p>
                <h2 className='text-2xl md:text-3xl lg:text-4xl mt-2'>
                    <span className='text-[#212121] font-bold'>Let's </span>
                    <span className='text-[#FE5150] font-bold'>Schedule a Demo</span>
                </h2>
                <div className='bg-white rounded-xl p-6 shadow-[0px_0px_16px_0_#C3C3C38F] mt-8'>
                    <h3 className='text-lg lg:text-xl leading-7'><span className='font-medium text-[#2E2E2E]'>I’m ready to grow my Business </span> <br />
                    <span className='font-bold text-[#2E2E2E]'>Schedule a Demo</span></h3>
                    <form className='space-y-4 mt-6' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Enter Your Name' required className={inputClass}/>
                        <input type="email" placeholder='Enter Your Email' required className={inputClass}/>
                        <input type="tel" placeholder='Phone Number' required className={inputClass}/>
                        <textarea name="" id="" placeholder='Enter Your Message'className={inputClass}></textarea>
                        <Button text="REQUEST A DEMO" type='submit' variant='danger' 
                        className='w-full mt-6 shadow-[0px_2px_4px_0_#60606038]'/>
                    </form>
                   
                </div>
            </div>
        <div><img src={demoImage} alt="" /></div>
      </div>
    </section>
  )
}

export default RequestDemoForm
