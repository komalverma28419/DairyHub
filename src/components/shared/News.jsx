import React from 'react'
import Title from '../ui/Title'
import logo_1 from  "../../assets/images/logo_1.png"
import logo_2 from "../../assets/images/logo_2.png"
import logo_3 from '../../assets/images/logo_3.png'
import logo_4 from "../../assets/images/logo_4.png"
import Button from '../ui/Button'


const News = () => {
  const logos = [
    logo_1,
    logo_2,
    logo_3,
    logo_4
  ]
  return (
    <section className='max-w-7xl mx-auto py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 overflow-hidden'>
      <div className='relative'>

        <Title text='Featured In' textAlign='center' lineAlign='center' lineWidth='w-24'/>

        <div className='flex w-max my-16 animate-scroll'>
          {logos.map((logo, index) =>(
            <img src={logo} key={index} alt='logo' className='h-8 md:h-14 lg:h-18 w-auto object-contain mx-16'/>
          ))}

          {logos.map((logo, index) =>(
            <img src={logo} key={index} alt='logo' className='h-8 md:h-14 lg:h-18 w-auto object-contain mx-16'/>
          ))}

          {logos.map((logo, index) =>(
            <img src={logo} key={index} alt='logo' className=' h-8 md:h-14 lg:h-18 w-auto object-contain mx-16'/>
          ))}
        </div>
        <Button text="View More" className='mx-auto block'/>
      </div>
    </section>
  )
}

export default News
