import React from 'react'
import '../../Styles/Boxcart.css' 
export default function BoxCart(props) {
  return (
    <div style={props.style} className='Cartbox'>
      <div className='boldText'>
        Plan your studies
      </div>
      <div className='details'>
        Find everything you need to know about canada's education system, husing for students, a pre-departure checklist and more
      </div>
      
        <button className='moreButton'>
          Read More
        </button>
      
    </div>
  )
}
