import React from 'react'
import '../Styles/FAQ.css'
import { BsPlusCircle } from 'react-icons/bs';

export default function FAQ() {
  return (
    <div>
      <div className='topBox'>
        Frequently Asked Questions
      </div>
      <div className='list'>
        <div className='question'>
          <div className='textLine'>< BsPlusCircle style={{ marginRight: 10, }} /> Do the have Permanent Campus?</div>
          <div className='textLine'>< BsPlusCircle style={{ marginRight: 10 }} /> Do they provide hostel facilities for outside students?</div>
          <div className='textLine'>< BsPlusCircle style={{ marginRight: 10 }} /> Canteen Available?</div>
          <div className='textLine'>< BsPlusCircle style={{ marginRight: 10 }} /> What about sports activites?</div>
          <div className='textLine'>< BsPlusCircle style={{ marginRight: 10 }} /> Do they organise job fair?</div>

        </div>
      </div>
      <div style={{height:'30vw'}}>
        
      </div>
    </div>
  )
}
