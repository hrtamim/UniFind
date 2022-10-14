import React from 'react'
import { Carousel } from 'antd';
import BoxCart from '../Components/Carts/BoxCart';
import '../Styles/Home.css';
import A1 from '../img/A1.jpg';
import { ImAirplane } from 'react-icons/im';
import CSE from '../img/CSE.JPG';
import A2 from '../img/A2.jpg'


export default function Home(label, key, icon, children, type) {
  const contentStyle = {
    height: '160px',
    color: '#fff',
 
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div>
      <div style={{ width: '100%' }}>
        <Carousel autoplay>
          <div>
            <img src={A1} width='100%' height="600" ></img>
          </div>
          <div>
            <img src={A2} width='100%' height="600" ></img>
          </div>
        </Carousel> 
      </div> 
      <div className='cartContainer'> 
        Our Services...
      </div>
      <div className='cartView'>
        <BoxCart style={{ backgroundColor: '#4d004d' }} />
        <BoxCart style={{ backgroundColor: 'blue' }} />
        <BoxCart style={{ backgroundColor: '#4d004d' }} /> 
        <BoxCart style={{ backgroundColor: 'blue' }} />
      </div>
      <div className='boxx'>
        <div className='headLine'> Advantages of Applying through<span>UnifindBD</span></div>
        <div style={{ display: 'flex',flexWrap:'wrap',justifyContent:'center',marginTop:'20px',marginBottom:'20px' }}>
          <SmallCart title='Free VIsa online' />
          <SmallCart title='Application Free Waiver' />
          <SmallCart title='Admission Counselling' />
        </div>
        <Carousel autoplay>
          <div>
            <Cart image={A1} headLine='BSc in CSE' text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' />
          </div>
          <div>
            <Cart image={A2} headLine='Bsc in EEE ' text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
          </div>
        </Carousel>
      </div>

    </div>
  )
}
const SmallCart = ({ icon, title }) => {
  return (
    <div className='small-cart'>
      <div><ImAirplane style={{ color: 'white', width: '15px', height: '15px' }} /></div>
      <p>{title}</p>
    </div>
  ) 
}
const Cart = ({ image, headLine, text }) => {
  return (
    <div className='cart-container'>
      <div className='cart'>
        <img src={CSE} />
        <h1>{headLine}</h1>
        <i>{text}</i>
      </div>
      <div className='cart'> 
        <img src={image} /> 
        <h1>{headLine}</h1>
        <i>{text}</i>
      </div>
      <div className='cart'>
        <img src={image} />
        <h1>{headLine}</h1>
        <i>{text}</i>
      </div>
    </div>
  )
}