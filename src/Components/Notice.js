import React from 'react';
import '../Styles/Notice.css';
function Notice(props) {
    return (
        <div className='totalBox'>
            <div className='firstBox'>
                <div className='largText'>
                    UIU Admission is on going.
                </div>
                <div className='smallText'>
                    Published date: 08/10/2022
                </div>
            </div>
            <div className='secondBox'>
                <button className='moreButton'>
                    Read More
                </button>
            </div>
        </div>
    );
}

export default Notice;