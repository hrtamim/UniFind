import React from 'react'
import '../Styles/Header.css'
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

                <Link to="/Profile" className="colBox6"
                ><div><BiUserCircle /></div></Link>

                
            </div>
            <Drawer title="Menus" placement="right" onClose={onClose} open={open}>
                <div className='header-menu' style={{ display: "block" }}>


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

                    <Link to="/Profile" className="colBox7"
                    ><div onClick={onClose}><BiUserCircle /></div></Link>


                </div>
            </Drawer>
        </div>
    )
}










