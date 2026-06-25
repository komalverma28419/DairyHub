import React from 'react'
import Title from './Title'
import preVector from "../../assets/images/preVector.png"
import nextVector from "../../assets/images/nextVector.png"

const ClientInfo = ({client, next, prev,activeBtn}) => {
  return (
    <div className='mt-10'>
      {/* <p '>{client.description}</p> */}
      {client.description.map((item, index) =>(
        <p key={index} className="font-medium text-gray-700 text-base mb-4">
            {item}
        </p>
      ))}
      <p className='text-lg font-bold '>{client.name}</p>
      <p className='font-medium text-[13px] text-[#383838]'>{client.designation}</p>
      <div className='flex gap-6 mt-4'>
        <button onClick={prev} alt="prev" className={`w-8 h-8 rounded-full cursor-pointer flex items-center 
        justify-center ${activeBtn === "prev" ? "bg-[#DE3E38]" : "bg-red-400 "} `}>
            <img src={preVector} />
        </button>
        <button onClick={next} className={`w-8 h-8 rounded-full cursor-pointer flex items-center 
        justify-center  ${activeBtn === "next" ? "bg-[#DE3E38]" : "bg-red-400"}`}>
            <img src={nextVector} alt="next" />
        </button>
      </div>
    </div>
  )
}

export default ClientInfo
