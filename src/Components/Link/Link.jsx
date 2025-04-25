import React from 'react'


const Link = ({route}) => {
 
  return (
   <li className='mr-7 cursor-pointer'> <a href={`route.path`}>
          {route.name} </a> </li>
  )
}

export default Link