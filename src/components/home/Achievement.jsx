import React from 'react'
import Title from '../ui/Title'
import AchievementCard from '../ui/AchievementCard'


const Achievement = () => {
  const cards = [1,2,3,4]
  return (
    <section className='py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20'>
      <div>
        <Title text='Our Achievements'/>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-8 justify-items-center'>
          {cards.map((item, index) => (
            <AchievementCard key={index} index={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievement
