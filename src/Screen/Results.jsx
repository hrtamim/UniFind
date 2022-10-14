import React from 'react';
import '../Styles/Results.css'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);
const onSearch = (value) => console.log(value);

function Results(props) {
    return (
        <div className='bbox'>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} >
                <text style={{ fontSize: 20, color: '#255f3e' }}>
                    List of Private Universities
                </text>
                <div>

                    <Search
                        placeholder="search"
                        onSearch={onSearch}
                        style={{
                            width: 200,
                        }}
                    />

                </div>
            </div> <br />
            <text>
                [For UGC approved courses click on the university name (not on individual university's website)]
            </text>
            <div style={{ width: '100%', marginTop: 20 }}>
                <div style={{ display: 'flex', backgroundColor: '#255f3e' }}>
                    <div className='slBox'>
                        <text style={{color:'#fff'}}>
                            Sl
                        </text>
                    </div>
                    <div className='nameBox'>
                    <text style={{color:'#fff'}}>
                    University Name
                        </text>
                        
                    </div>
                    <div className='webBox'>
                    <text style={{color:'#fff'}}>
                    Website
                        </text>
                        
                    </div>
                </div>
                <div style={{ display: 'flex', }}>
                    <div className='slBox'>
                      1
                    </div>
                    <div className='nameBox'>
                        North South University
                    </div>
                    <div className='webBox'>
                        <a>www.northsouth.edu</a>
                    </div>
                </div>
                <div style={{ display: 'flex', }}>
                    <div className='slBox'>
                       2
                    </div>
                    <div className='nameBox'>
                        Independent University 
                    </div>
                    <div className='webBox'>
                        <a>www.iub.edu.bd</a>
                    </div>
                </div>
                <div style={{ display: 'flex',}}>
                    <div className='slBox'>
                       3
                    </div>
                    <div className='nameBox'>
                        United International University
                    </div>
                    <div className='webBox'>
                        <a>www.uiu.edu</a>
                    </div>
                </div>
                <div style={{ display: 'flex', }}>
                    <div className='slBox'>
                       4
                    </div>
                    <div className='nameBox'>
                        Daffodil International University
                    </div>
                    <div className='webBox'>
                        <a>www.diu.edu.bd</a>
                    </div>
                </div>
                <div style={{ display: 'flex', }}>
                    <div className='slBox'>
                      1
                    </div>
                    <div className='nameBox'>
                        North South University
                    </div>
                    <div className='webBox'>
                        <a>www.northsouth.edu</a>
                    </div>
                </div>
                <div style={{ display: 'flex', }}>
                    <div className='slBox'>
                       2
                    </div>
                    <div className='nameBox'>
                        Independent University 
                    </div>
                    <div className='webBox'>
                        <a>www.iub.edu.bd</a>
                    </div>
                </div>
                <div style={{ display: 'flex',}}>
                    <div className='slBox'>
                       3
                    </div>
                    <div className='nameBox'>
                        United International University
                    </div>
                    <div className='webBox'>
                        <a>www.uiu.edu</a>
                    </div>
                </div>
                <div style={{ display: 'flex', }}>
                    <div className='slBox'>
                       4
                    </div>
                    <div className='nameBox'>
                        Daffodil International University
                    </div>
                    <div className='webBox'>
                        <a>www.diu.edu.bd</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Results;