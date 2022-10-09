import React from 'react'
import '../Styles/About.css';
import AboutImage from '../img/AboutImage.jpg';

export default function AboutUs() {
  return (
    <div className='about'>
      <div>
        <div className='bigText'>
          About Us
        </div>
        <div className='SmallText'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
        <div style={{ alignItems: 'center', width: '100%' }}><button className='learnMore'> Learn More..</button></div>
      </div>
      <img src={AboutImage} width='500' height="600" ></img>
    </div>
  )
}
