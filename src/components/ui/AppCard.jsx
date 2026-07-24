import React from 'react'
import Title from './Title'
import Button from '../ui/Button'
import appStore from '../../assets/images/appStore.png'
import playStore from '../../assets/images/playStore.png'
import { Link } from 'react-router-dom'

const AppCard = ({title, description, image, bgColor, slug}) => {
  return (
    <div 
    id = {slug}
    className='grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-4xl border border-[#C4C4C4] py-8 px-10 scroll-mt-24'>
        {/* left-content */}
        <div className=''>
            <Title text={title}/>
            {description.map((p, index) =>(
                <p className='my-6 lg:my-8 text-font text-sm md:text-base' key={index}>{p}</p>  
                ))}
            <Link to='/request-demo'><Button text="Request For Demo"/></Link>
            
        </div>
        {/* right-content */}
        <div className='relative flex flex-col gap-6 lg:justify-end'>
            <div className='flex items-center justify-center lg:absolute px-6 py-10 rounded-[20px] shadow-[0px_4px_25px_0_#20202040] lg:-top-32' style={{backgroundColor: bgColor}}>
                <img src={image} alt={title} className='block'/>
            </div>
            <div className='flex gap-4'>
                <img src={appStore} alt="appStore-icon" />
                <img src={playStore} alt="playStore-icon" />
            </div>
        </div>
      
    </div>
  )
}

export default AppCard
