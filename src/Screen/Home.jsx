import React from 'react'

import OurService from '../Components/OurService';
import BoxCart from '../Components/Carts/BoxCart';
import '../Styles/Home.css'

export default function Home(label, key, icon, children, type) {
  return (
    <div>
      <div className='cartContainer'>
        <OurService />
      </div>
      <div className='cartView'>
        <BoxCart style={{backgroundColor:'#4d004d'}} />
        <BoxCart style={{backgroundColor:'blue'}} /> 
        <BoxCart style={{backgroundColor:'#4d004d'}} />
        <BoxCart style={{backgroundColor:'blue'}} />
      </div>
      <div className='boxx'>
        <div className='headLine'> Advantages of Applying through</div>
        <div className='headLine1'>UnifindBD</div>

      </div>
    </div>
  )
}
