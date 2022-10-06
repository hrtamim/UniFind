import React from 'react'
import '../Styles/Footer.css'
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillYoutube } from 'react-icons/ai';

export default function Footer() {
  return (
    <div className='footerBox'>
      <div className='box1'>
        <div>
          <div className='terms'>
            Terms and conditions | Transparency
          </div>
          <div className='about'>
            About Unifind
          </div>
          <div className='paragraph'>
            UniFindBD International Education <br></br>
            Strategy (2019-2024) <br />
            Frequently asked questions
          </div>

        </div>
        <div style={{width:'10%'}}>

        </div>
        <div style={{ marginTop: 15 }}>
          <div className='about'>
            Media
          </div>
          <div style={{ fontSize: 10, marginTop: 10 }}>
            News
          </div>
          <div style={{ fontSize: 10 }}>
            Videos
          </div>
        </div>
      </div>
      <div className='box1'>
        <div style={{ marginTop: 15 }}>

          <div className='about'>
            Contact us
          </div>
          <div style={{ fontSize: 10, }}>
            Search
          </div>
        </div>
        <div style={{ marginTop: 15,marginLeft:'10%',alignItems:'center' }}>

          <div className='about'>
            Social media
          </div>
          <AiFillLinkedin />
          <BsFacebook style={{marginLeft:5}}/>
          <FaInstagramSquare style={{marginLeft:5}}/>
<IoLogoWhatsapp style={{marginLeft:5}}/>
<AiFillYoutube style={{marginLeft:5}}/>
        </div>
      </div>
    </div>
  )
}
