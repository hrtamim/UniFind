import React from 'react';
import '../Styles/LogIN.css';
import Wlc from '../img/Wlc.jpg';
import signup from '../img/signup.png';
import { Checkbox } from 'antd';
const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};


function SignUp(props) {
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
                    <img src={signup} height='90%' width='90%'></img>
                </div>
                <div className='boxB'>
                    <div className='topText'>
                        Sign Up
                    </div>
                    <div style={{ fontSize: 16 }}>
                        Please register here...
                    </div>
                    <div style={{ fontSize: 20 }}>
                        Email
                    </div>
                    <input className='inputLogIn' type={'text'} /> <br />
                    <div style={{ fontSize: 20 }}>
                        Password
                    </div>
                    <input className='inputLogIn' type={'text'} /> <br />
                    <div style={{ fontSize: 20 }}>
                        Re-type Password
                    </div>
                    <input className='inputLogIn' type={'text'} /> <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '40vw', marginTop: 10 }} >
                        <Checkbox onChange={onChange}>Remember me</Checkbox>
                        
                    </div>
                    <button className='LogButton'>Sign Up</button>
                    
                
                </div>
            </div>  
            
        </div>
    );
}

export default SignUp;