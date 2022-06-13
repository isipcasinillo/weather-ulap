import React from 'react'
import './../Humidity/Humidity.css'
function Humidity() {
    return (
        <div className="Humidity">
            <div className='HumidityContainer p8 cw'>
                <div className='pdb16 p12'>HUMIDITY</div>
                <div className='pb77 p32'>70%</div>
                <div className='pb16'>The dew point is 64° right now</div>
            </div>
        </div>
    )
}

export default Humidity