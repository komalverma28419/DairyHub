import React, { useState } from 'react'
import Button from '../ui/Button'

const NewsLetter = () => {
  const[email, setEmail] = useState("")
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(email)
  }
  return (
    <section className='py-12 md:py-16 px-6 md:px-10 lg:px-16 xl:px-20 bg-linear-to-r from-[#FF7570] to-[#EB4D45]'>
      <div className="flex flex-col items-center justify-center text-center space-y-2">
            <h1 className="md:text-4xl text-white text-2xl font-extrabold">Subscribe To Newsletter</h1>
            <p className="md:text-lg text-white pb-8">
                Be a part of our Journey, Subscribe and stay up to date
            </p>
            <form className="flex items-center justify-between max-w-lg w-full md:h-13 h-12 rounded-lg 
            shadow-[-4px_6px_6px_0_#51515140]" onSubmit={handleSubmit}>
                <input
                    className="h-full border-0 outline-none w-full px-3 text-[#939393] bg-[#FEFEFE] rounded-l-lg"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <Button text="SUBSCRIBE"  type='submit' className='rounded-l-none md:px-12 px-8 h-full'/>
            </form>
        </div>
    </section>
  )
}

export default NewsLetter
