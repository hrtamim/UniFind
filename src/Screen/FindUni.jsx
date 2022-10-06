import React from 'react'
import '../Styles/FindUni.css'

export default function FindUni() {

  return (
      <div style={{  }}>
        <div className='findBox'>
          Find University
        </div>
        <div style={{ marginLeft: '15vw',marginTop:'2vw' }}>
          Passing Year <br />
          <input style={{
            width: '70vw', height: 20,
            borderRadius: 10, marginTop: 10,
            paddingLeft: 5, backgroundColor: '#7891BE',
            marginBottom:10,
          }} type={'text'} /> <br />
          HSC/SSC Information <br />
          <input style={{
            width: '70vw', height: 20,
            borderRadius: 10,marginBottom:10, marginTop: 5,
            paddingLeft: 5, backgroundColor: '#7891BE',
          }} type={'text'} /> <br />
          Cost <br />
          <input style={{
            width: '70vw', height: 20,marginBottom:10, borderRadius: 10,
            marginTop: 5, paddingLeft: 5, backgroundColor: '#7891BE'
          }} type={'text'} /> <br />
          Area <br />
          <input style={{
            width: '70vw', height: 20,
            borderRadius: 10, marginTop: 5,marginBottom:10,
            paddingLeft: 5, backgroundColor: '#7891BE'
          }} type={'text'} /> <br />
          Faculty Quality <br />
          <input style={{
            width: '70vw', height: 20,
            borderRadius: 10, marginTop: 5,marginBottom:10,
            paddingLeft: 5, backgroundColor: '#7891BE'
          }} type={'text'} /> <br />
          Student Capacity <br />
          <input style={{
            width: '70vw', height: 20, borderRadius: 10,marginBottom:10,
            marginTop: 5, paddingLeft: 5, backgroundColor: '#7891BE'
          }} type={'text'} /> <br />
          Grading Policy <br />
          <input style={{
            width: '70vw', height: 20, borderRadius: 10,
            marginTop: 5, paddingLeft: 5, backgroundColor: '#7891BE',
            marginBottom: '4vw'
          }} type={'text'} /> <br />

        </div>
        <div className='boxButton'>
          <button className='buttonBox'> Find University</button>
        </div>
        <div style={{marginBottom:'11vw'}}>

        </div>
      </div>
    
  )
}
