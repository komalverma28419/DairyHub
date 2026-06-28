import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const StarRating = ({rating = 0}) => {
  return (
    <div className='flex gap-1 text-[#FF5150] text-base'>
      {Array.from({length: 5}).map((__, i)=> (
        <FontAwesomeIcon key={i} icon={i<rating ? solidStar : regularStar}/>
      ))}
    </div>
  )
}

export default StarRating
