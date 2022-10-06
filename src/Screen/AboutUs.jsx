import React from 'react'
import '../Styles/About.css'

export default function AboutUs() {
  return (
    <div style={{ display: 'flex', margin: 20, padding: 20 }}>
      <div className='contactUs'>
        <div className='bigText'>
          Contact Us
        </div>
        <div className='SmallText'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
        </div>
        <div style={{alignItems:'center',width:'100%'}}><button className='learnMore'> Learn More..</button></div>
      </div>
      <div>

      </div>
    </div>
  )
}
