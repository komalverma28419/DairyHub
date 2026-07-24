import React from 'react'
import AppCard from '../ui/AppCard'
import Title from '../ui/Title'
import { apps } from '../../data/appdata'

const OurApplications = () => {
  return (
    <section className='max-w-7xl mx-auto py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 space-y-32'>
        <Title text="Let's have a Visit at our recently developed Applications" lineAlign='center' textAlign='center' lineWidth='w-60'/>

        {apps.map((app) =>
            (<AppCard
               key={app.id}
               title={app.title}
               description={app.description}
               image={app.image}
               bgColor={app.bgColor}
               slug = {app.slug}
            />)
            )}
    </section>
  )
}

export default OurApplications
