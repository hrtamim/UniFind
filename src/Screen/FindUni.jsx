import React from 'react'
import '../Styles/FindUni.css'
import { Dropdown, Menu, Space } from 'antd';

export default function FindUni() {
  const [Select, setSelect] = React.useState()
  const [SelectArea, setSelectArea] = React.useState()
  const [SelectFaculty, setSelectFaculty] = React.useState()

  const menu = (
    <Menu
      items={[
        {
          label: <button onClick={() => {
            setSelect('2017')
          }}>2017</button>,
          key: '0',
        },
        {
          label:  <button onClick={() => {
            setSelect('2018')
          }}>2018</button>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: <button onClick={() => {
            setSelect('2019')
          }}>2020</button>,
          key: '3',
        },
      ]}
    />
  );
  const area = (
    <Menu
      items={[
        {
          label: <button onClick={() => {
            setSelectArea('Dhaka')
          }}>Dhaka</button>,
          key: '0',
        },
        {
          label:  <button onClick={() => {
            setSelectArea('Narayanganj')
          }}>Narayanganj</button>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: <button onClick={() => {
            setSelectArea('Jessore')
          }}>Jessore</button>,
          key: '3',
        },
      ]}
    />
  );
  const faculty = (
    <Menu
      items={[
        {
          label: <button onClick={() => {
            setSelectFaculty('CSE')
          }}>CSE</button>,
          key: '0',
        },
        {
          label:  <button onClick={() => {
            setSelectFaculty('EEE')
          }}>EEE</button>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: <button onClick={() => {
            setSelectFaculty('Civil')
          }}>Civil</button>,
          key: '3',
        },
      ]}
    />
  );


  return (
    <div style={{}}>
      <div className='findBox'>
        Find University
      </div>
      <div style={{ marginLeft: '15vw', marginTop: '2vw',fontSize:20 }}>
        Passing Year <br />

        <Dropdown overlay={menu} trigger={['click']}>
            <div onClick={(e) => e.preventDefault()} style={{
              width: '70vw',
              backgroundColor: '#7891BE',
              borderRadius: '20px',
              padding: '10px',
            }}>{Select ? Select : 'Select Passing Year'}</div>
        </Dropdown> <br />
        HSC/SSC Information <br />
        <input className='inputFindUni' type={'text'} /> <br />
        Cost <br />
        <input className='inputFindUni' type={'text'} /> <br />
        Area <br />
        <Dropdown overlay={area} trigger={['click']}>
            <div onClick={(e) => e.preventDefault()} style={{
              width: '70vw',
              backgroundColor: '#7891BE',
              borderRadius: '20px',
              padding: '10px',
            }}>{SelectArea ? SelectArea : 'Select Area'}</div>
        </Dropdown><br/>        
        Faculty  <br />
        <Dropdown overlay={faculty} trigger={['click']}>
            <div onClick={(e) => e.preventDefault()} style={{
              width: '70vw',
              backgroundColor: '#7891BE', 
              borderRadius: '20px',
              padding: '10px',
            }}>{SelectFaculty ? SelectFaculty : 'Select Faculty'}</div>
        </Dropdown><br/> 
        
      </div>
      <div className='boxButton'>
        <button className='buttonBox'> Find University</button>
      </div>
      <div style={{ marginBottom: '11vw' }}>

      </div>
    </div>

  )
}
