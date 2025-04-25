import React from 'react'
import { IoCheckmarkCircle } from "react-icons/io5";


const Feature = ({feature}) => {
  return (
    <div>
        <p className='flex items-center'> 
          <IoCheckmarkCircle  className='text-green-500 mr-2'/> 
          {feature}
          </p>
    </div>
  )
}

export default Feature