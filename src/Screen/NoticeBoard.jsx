import React from 'react'
import '../Styles/NoticeBoard.css'
import image from '../../src/img/UIU.jpg'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import Notice from '../Components/Notice';

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
      width: 100,
      marginLeft: '10%'
    }}
  />
);
const onSearch = (value) => console.log(value);

export default function NoticeBoard() {
  return (
    <div style={{ alignItems: 'center' }}>
      <div style={{ backgroundImage: `url("https://ciac.uiu.ac.bd/wp-content/uploads/2022/01/Awaited-Dreams-scaled.jpg")`, height: 600, width: '100%' }}>
        <div style={{ height: 600, width: '100%', paddingTop: 250 }}>
          <div className='largeText'>
            Admission
          </div>
          <div className='belowText'>
            <div style={{ marginRight: 10 }}>
              Home
            </div>
            <div style={{ marginRight: 10 }}>
              Admission
            </div>
            <div style={{ marginRight: 10 }}>
              information
            </div>
          </div>
        </div>
      </div>
      <div className='NoticeHeadline'>
        Admission Notice
      </div>
      <div className='searchView'>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </div>
      <div> 
        <Notice />
        <Notice />
        <Notice />
        <Notice />
        <Notice /> 
        <Notice />
        <Notice />
      </div>
    </div>
  )
}
