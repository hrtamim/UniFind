import React from 'react';
import '../Styles/LogIN.css';
import Wlc from '../img/Wlc.jpg';
import { Checkbox,message,Spin } from 'antd';
import {BiLoader} from 'react-icons/bi'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth }from '../firebase'
import { Link } from 'react-router-dom';
const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};


function LogIN(props) {
    const [Email,setEmail]=React.useState()
    const [Password,setPassword]=React.useState()
    const [Loader,setLoader]=React.useState(false)


    const checkLogin=()=>{
        if(!Email){
            message.warning("Please enter your email")
            return
        }
        if(!Password){
            message.warning("Please enter password")
            return
        }
        setLoader(true)
        signInWithEmailAndPassword(auth, Email, Password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    message.success("Successful")
    setLoader(false)
    window.location.href="/Profile"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    message.error(errorMessage)
    setLoader(false)
  });
    }
    return (
        <div className='totalPage'>
            <div style={{
                marginTop: 10,
                backgroundColor: '#fff',
                borderRadius: 40,
                display: 'flex',
                height: '100%',
                flexWrap: 'wrap'


            }}>

                <div className='boxA'>
                    <img src={Wlc} height='90%' width='90%'></img>
                </div>
                <div className='boxB'>
                    <div className='topText'>
                        Log In
                    </div>
                    <div style={{ fontSize: 16 }}>
                        Please Login to Continue
                    </div>
                    <div style={{ fontSize: 20 }}>
                        Email
                    </div>
                    <input onChange={e=>setEmail(e.target.value)} className='inputLogIn' type={'text'} /> <br />
                    <div style={{ fontSize: 20 }}>
                        Password
                    </div>
                    <input onChange={e=>setPassword(e.target.value)} className='inputLogIn' type={'text'} /> <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '40vw', marginTop: 10 }} >
                        <Checkbox onChange={onChange}>Keep me logged in</Checkbox>
                        <div style={{
                            fontSIze: 8,
                            marginLeft: 20
                        }}>
                            Forgot Password?
                        </div>
                        <Link to="/SignUp" style={{
                            fontSIze: 8,
                            marginLeft: 20
                        }}>
                            Sign Up
                        </Link>
                    </div>
                    
                    <button onClick={checkLogin} className='LogButton'>
                   {Loader&&(<Spin indicator={<BiLoader style={{color:'white'}}/>}/>)} Login</button>
                    
                </div>
            </div>
            
        </div>
    );
}

export default LogIN;