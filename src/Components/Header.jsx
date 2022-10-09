import React from 'react'
import '../Styles/Header.css'
import { Col, Row, } from 'antd';
import Search from './Search';
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import '../Styles/Search.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai'
import { Button, Drawer } from 'antd';

export default function Header() {
    const [open, setOpen] = React.useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className='header'>
            <div className='header-text'>
                UniFindBD
            </div>
            <div className="header-search">
                <input type={'text'} placeholder='Search' />
                <AiOutlineSearch style={{ marginRight: 5 }} />
            </div>
            <div onClick={showDrawer} className='header-menu-icon'>
                <AiOutlineMenu style={{ width: 30, height: 30 }} />
            </div>
            <div className='header-menu'>


                <Link to="/" className="colBox2"
                ><div>Home</div></Link>


                <Link to="/NoticeBoard" className="colBox3"
                ><div>Notice Board</div></Link>


                <Link to="/FindUni" className="colBox4"
                ><div>Find Uni</div></Link>


                <Link to="/FAQ" className="colBox5"
                ><div>FAQ's</div></Link>


                <Link to="/AboutUs" className="colBox6"
                ><div>About Us</div></Link>

                <div className='header-icon'>
                    <div className="colBox7"
                    ><BiUserCircle /></div>
                </div>
            </div>
            <Drawer title="Menus" placement="right" onClose={onClose} open={open}>
                <div className='header-menu' style={{display:"block"}}>


                    <Link to="/" className="colBox2"
                    ><div onClick={onClose}>Home</div></Link>


                    <Link to="/NoticeBoard" className="colBox3"
                    ><div onClick={onClose}>Notice Board</div></Link>


                    <Link to="/FindUni" className="colBox4"
                    ><div onClick={onClose}>Find Uni</div></Link>


                    <Link to="/FAQ" className="colBox5"
                    ><div onClick={onClose}>FAQ's</div></Link>


                    <Link to="/AboutUs" className="colBox6"
                    ><div onClick={onClose}>About Us</div></Link>

                    <div className='header-icon'>
                        <div className="colBox7"
                        ><BiUserCircle /></div>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}











// <Row className='headerBox'>
//             <Col span={6}>
//                 <div className="colBox1"
//                      >UniFindBD</div>
//             </Col>
//             <Col span={6}>
//                 <Search/>
//             </Col>
            // <Col span={6}>
            //     <Link  to="/" className="colBox2"
            //          >Home</Link>
            // </Col>
            // <Col span={6}>
            //     <Link to="/NoticeBoard" className="colBox3"
            //          >Notice Board</Link>
            // </Col>
            // <Col span={6}>
            //     <Link to="/FindUni" className="colBox4"
            //          >Find Uni</Link>
            // </Col>
            // <Col span={6}>
            //     <Link to ="/FAQ" className="colBox5"
            //          >FAQ's</Link>
            // </Col>
            // <Col span={6}>
            //     <Link to="/AboutUs" className="colBox6"
            //          >About Us</Link>
            // </Col>
            // <Col span={6}>
            //     <div  className="colBox7"
            //          ><BiUserCircle/></div>
            // </Col>
//         </Row>