import React, { useContext } from 'react'
import './../Humidity/Humidity.css'
import ApiContext from '../ApiContext'
function Humidity() {
    const { currentData,
    } = useContext(ApiContext)
    return (
        <div className="Humidity">
            <div className='HumidityContainer p8 cw'>
                <div className='pdb16 p12'>HUMIDITY</div>
                <div className='pb84 p32'>{Math.floor(currentData.humidity)}%</div>
                <div className='pb16 p10'>The dew point is {Math.floor(currentData.dew_point)}° right now</div>
            </div>
        </div>
    )
}

export default Humidity