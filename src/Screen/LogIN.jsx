import React from 'react';
import '../Styles/LogIN.css';
import Wlc from '../img/Wlc.jpg';
import { Checkbox } from 'antd';
const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};


function LogIN(props) {
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
                        Username
                    </div>
                    <input className='inputLogIn' type={'text'} /> <br />
                    <div style={{ fontSize: 20 }}>
                        Password
                    </div>
                    <input className='inputLogIn' type={'text'} /> <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '40vw', marginTop: 10 }} >
                        <Checkbox onChange={onChange}>Keep me logged in</Checkbox>
                        <div style={{
                            fontSIze: 8,
                            marginLeft: 20
                        }}>
                            Forgot Password?
                        </div>
                    </div>
                    <button className='LogButton'>Login</button>
                    <div className='textView'>Or</div>
                <div style={{marginTop:10, fontSize:15,marginLeft:'17.5vw'}}>
                    Login With
                </div>
                </div>
            </div>
            
        </div>
    );
}

export default LogIN;