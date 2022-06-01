import React from 'react'
import './../Rain/Rain.css'
function Rain() {
    return (
        <div className="Rain">
            <div className='RainContainer p8 cw'>
                <div className='pdb16 p12'>RAIN</div>
                <div className='p32'>0''</div>
                <div className='p16 pb60'>In the last hour</div>
                <div className='pb16'>1.3'' expected in 24 hours.</div>
            </div>
        </div>
    )
}

export default Rain