import React, { useState } from 'react'
import Title from '../ui/Title'
import { brandData, recImage } from '../../data/brandData'
import Button from '../ui/Button'

const Brand = () => {
    const[activeTab , setActiveTab] = useState(brandData[0])
    console.log("active tab:" ,activeTab)
  return (
    <section className='max-w-7xl mx-auto py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 bg-[#FEF9F9]'>
        <div>
            <Title text='Brands That Trust Us'/>
            <div className='flex gap-6 lg:gap-10 flex-wrap mt-8 mb-10'>
                {brandData.map((item) =>(
                    <Button key={item.id} text={item.tabName} size='sm' onClick={() => setActiveTab(item)}
                    variant={ activeTab.id === item.id ? "danger" : "outline"}/>
                ))}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* left-content */}
                <div className='text-xl md:text-2xl font-semibold text-[#313131] '>
                    <h3>{activeTab.title}</h3>
                    <div className='space-y-3 lg:space-y-5 mt-6'>
                        {activeTab.description.map((para, index) =>(
                            <p key={index} className='leading-6 md:leading-7.5 text-sm md:text[15px]
                             lg:text-base font-medium text-[#5C5C5C]'>
                                {para}
                            </p>
                        ))}
                    </div>
                    <div className='flex gap:6 lg:gap-8 mt-4 lg:mt-6'>
                        {recImage.map((img, index) =>(
                        <img src={img} key={index} alt='img' className='hidden md:block w-32 lg:w-44'/>
                    ))}
                    </div>
                </div>
                {/* right-image */}
                <div className='flex justify-center items-center'>
                    <img src={activeTab.image} alt={activeTab.title} className='w-full'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Brand
