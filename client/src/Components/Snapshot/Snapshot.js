import React from 'react'
import UvIndex from '../UvIndex/UvIndex'
import AirQuality from '../AirQuality/AirQuality'
import Humidity from '../Humidity/Humidity'
import Rain from '../Rain/Rain'
import Sunrise from '../Sunrise/Sunrise'
import Temperature from '../Temperature/Temperature'
import './Snapshot.css'
function Snapshot() {
    return (
        <>
            <div className='Snapshot'>

                <UvIndex />
                <AirQuality />
                <Temperature />
                <Sunrise />
                <Humidity />
                <Rain />
            </div>
        </>

    )
}

export default Snapshot