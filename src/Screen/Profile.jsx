import React from 'react';
import '../Styles/Profile.css'
import student from '../img/st.png'

function Profile(props) {
    return (
        <div className='fullBox'>

            <div className='backBox'>
                <div className='profileBox'>
                <img src={student} height='100' width='100' borderRadious='47'></img>
                </div>
                <div className='infoBox'>
                Name 
                <div>
                    Md. Saiful Islam
                </div>
                Email 
                <div>
                    saiful@gmail.com
                </div>
                
                
                </div>
            </div>
        </div>
    );
}

export default Profile;