import React from 'react'
import '../../Styles/Boxcart.css'
export default function BoxCart() {
  return (
    <div className='Cartbox'>
      <div className='boldText'>
        Plan your studies
      </div>
      <div className='details'>
        Find everything you need to know about canada's education system, husing for students, a pre-departure checklist and more
      </div>
      <div style={{ alignItems: 'center' }}>
        <div className='moreButton'>
          Read More
        </div>
      </div>
    </div>
  )
}
