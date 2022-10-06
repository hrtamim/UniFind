import React from 'react'

import OurService from '../Components/OurService';
import BoxCart from '../Components/Carts/BoxCart';
import '../Styles/Home.css'

export default function Home(label, key, icon, children, type) {
  return (
    <div>
      <div style={{ width: '100%', backgroundColor: 'red', height: 50, alignItems: 'center', justifyContent: 'center' }}>
        <OurService />
      </div>
      <div style={{ display: 'flex' }}>
        <BoxCart />
        <BoxCart />
        <BoxCart />
        <BoxCart />
      </div>
      <div className='boxx'>
        <div className='headLine'> Advantages of Applying through</div>
        <div className='headLine1'>UnifindBD</div>

      </div>
    </div>
  )
}
