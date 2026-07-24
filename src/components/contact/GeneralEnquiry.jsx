import React from 'react'
import Title from '../ui/Title'
import EnquiryCard from '../ui/EnquiryCard'
import { enquiryData } from '../../data/enquiryData'

const GeneralEnquiry = () => {
  return (
    <section className='max-w-7xl mx-auto py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 bg-[#FAFBFF]'>
      <Title text="General Enquiry"/>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 mt-8'>
        {enquiryData.map((enquiry)  =>(
        <EnquiryCard 
          key={enquiry.id}
          image={enquiry.image}
          title={enquiry.title}
          email={enquiry.email}
          contactNo={enquiry.contactNo}
        />
      ))}
      </div>
    </section>
  )
}

export default GeneralEnquiry
