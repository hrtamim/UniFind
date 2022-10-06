import React from 'react'
import '../Styles/NoticeBoard.css'
import image from '../../src/img/UIU.jpg'

export default function NoticeBoard() {
  return (
    <div style={{ backgroundImage: `url(${image})`, height: 600, width: '100%' }}>
      <div style={{ height: 600, width: '100%', paddingTop: 250 }}>
        <div className='largeText'>
          Admission
        </div>
        <div className='belowText'>
          <div style={{ marginRight:10 }}>
            Home
          </div>
          <div style={{ marginRight:10 }}>
            Admission
          </div>
          <div style={{ marginRight:10 }}>
            information
          </div>
        </div>
      </div>
    </div>
  )
}
