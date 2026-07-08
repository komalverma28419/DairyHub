import React from 'react'
import AboutTeam from "../../assets/images/AboutTeam.png"
import Title from '../ui/Title'

const OurTeam = ({title}) => {
  return (
    <section className='py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 bg-[#FFFBFB]'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='max-w-lg'>
            <img src={AboutTeam} alt="team-image" className='w-full'/>
        </div>
        <div>
            <Title text={title}/>
            <p className='text-font mt-8 font-medium text-sm md:text-base leading-7'>Automating the daily milk collection process is the first empowering step towards the 
                whole rural milk revolution. The AMCS (Automatic Milk Collection System) still remains 
                an important initial point on which the milk supply chain management maximizes the milk 
                value,usages, and benefits.
            </p>
            <p className='text-font mt-5 font-medium text-sm md:text-base leading-7'>Milk supply chain management maximizes the milk value,usages, and benefits.Automating 
                the daily milk collection process is the first empowering step towards the whole rural
                milk revolution. daily milk collection process is the first empowering step towards 
                the whole rural milk revolution.
            </p>
        </div>
      </div>
    </section>
  )
}

export default OurTeam
