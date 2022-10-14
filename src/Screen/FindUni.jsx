import React from 'react'
import '../Styles/FindUni.css'
import { Dropdown, Menu, Space } from 'antd';

export default function FindUni() {
  const [Select, setSelect] = React.useState()
  const [SelectArea, setSelectArea] = React.useState()
  const [SelectFaculty, setSelectFaculty] = React.useState()
  const [SelectCost, setSelectCost] = React.useState()

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
  const cost = (
    <Menu
      items={[
        {
          label: <button onClick={() => {
            setSelectCost('4,00,000-5,00,000')
          }}>4,00,000-5,00,000</button>,
          key: '0',
        },
        {
          label:  <button onClick={() => {
            setSelectCost('5,00,000-6,00,000')
          }}>5,00,000-6,00,000</button>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: <button onClick={() => {
            setSelectCost('7,00,000-8,00,000')
          }}>7,00,000-8,00,000</button>,
          key: '3',
        },
        {
          label: <button onClick={() => {
            setSelectCost('7,00,000-8,00,000')
          }}>8,00,000-9,00,000</button>,
          key: '4',
        },
        {
          label: <button onClick={() => {
            setSelectCost('7,00,000-8,00,000')
          }}>9,00,000-10,00,000</button>,
          key: '5',
        },
      ]}
    />
  );
  const area = (
    <Menu
      items={[
        {
          label: <button onClick={() => {
            setSelectArea('Dhanmondi')
          }}>Dhanmondi</button>,
          key: '0',
        },
        {
          label:  <button onClick={() => {
            setSelectArea('Mohakhali')
          }}>Mohakhali</button>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: <button onClick={() => {
            setSelectArea('Badda')
          }}>Badda</button>,
          key: '3',
        },
        {
          label: <button onClick={() => {
            setSelectArea('Basundhara R/A')
          }}>Basundhara R/A</button>,
          key: '3',
        },
        {
          label: <button onClick={() => {
            setSelectArea('Savar')
          }}>Savar</button>,
          key: '3',
        },
        {
          label: <button onClick={() => {
            setSelectArea('Tejgaon')
          }}>Tejgaon</button>,
          key: '3',
        },
        {
          label: <button onClick={() => {
            setSelectArea('Banani')
          }}>Banani</button>,
          key: '3',
        },
        {
          label: <button onClick={() => {
            setSelectArea('Mirpur')
          }}>Mirpur</button>,
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
        SSC Information <br />
        <input className='inputFindUni' type={'text'} placeholder='Ex. 5.00' /> <br />
        HSC Information <br />
        <input className='inputFindUni' type={'text'} placeholder='Ex. 5.00' /> <br />
        Cost <br />
        <Dropdown overlay={cost} trigger={['click']}>
            <div onClick={(e) => e.preventDefault()} style={{
              width: '70vw',
              backgroundColor: '#7891BE',
              borderRadius: '20px',
              padding: '10px',
            }}>{SelectCost ? SelectCost : 'Select Cost'}</div>
        </Dropdown><br/> 
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
