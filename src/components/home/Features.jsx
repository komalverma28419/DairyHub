import React from 'react'
import FeatureCard from '../ui/FeatureCard'
import Title from '../ui/Title'
import { features } from '../../data/featuresData'
import bgFeature from '../../assets/images/bgFeature.png'

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20" 
    style={{backgroundImage: `url(${bgFeature})`}}>
        <Title text="Our Features" lineAlign='center' textAlign='center' lineWidth='w-24'/>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 '>
        {features.map((feature,index) =>(
        <FeatureCard key={index} feature={feature}/>
        ))}
      </div>
    </section>
  )
}

export default Features
