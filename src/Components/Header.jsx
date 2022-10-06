import React from 'react'
import '../Styles/Header.css'
import { Col, Row, } from 'antd';
import Search from './Search';
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const style = {
    background: '#0092ff',
    padding: '8px 0',
};

export default function Header() {
    return (
        <Row style={{ display: 'flex',height:45,backgroundColor:'rgb(25, 10, 241)',alignItems:'center',textAlign:'center',overflow:'hidden'}}>
            <Col span={6}>
                <div className="columnBox1"
                     >UniFindBD</div>
            </Col>
            <Col span={6}>
                <Search/>
            </Col>
            <Col span={6}>
                <Link  to="/" className="columnBox2"
                     >Home</Link>
            </Col>
            <Col span={6}>
                <Link to="/NoticeBoard" className="columnBox3"
                     >Notice Board</Link>
            </Col>
            <Col span={6}>
                <Link to="/FindUni" className="columnBox4"
                     >Find Uni</Link>
            </Col>
            <Col span={6}>
                <Link to ="/FAQ" className="columnBox5"
                     >FAQ's</Link>
            </Col>
            <Col span={6}>
                <Link to="/AboutUs" className="columnBox6"
                     >About Us</Link>
            </Col>
            <Col span={6}>
                <div  className="columnBox7"
                     ><BiUserCircle/></div>
            </Col>
        </Row>
    )
}
