import React, {useContext} from 'react'
import './../AirQuality/AirQuality.css'
import '../global.css'
import ApiContext  from '../ApiContext'
function AirQuality() {
    const { apiPollutionState,
    } = useContext(ApiContext)
    return (
        <div className="AirQuality">
            <div className='AirQualityContainer p8 cw'>
                <div className='pdb16 p12'>AIR QUALITY</div>
                <div className='pdb8 p32 '>{apiPollutionState} <span className='p16'> Index</span></div>
                <div className='pdb42 p16'>Fair</div>
                <div className='pdb8 p10'>If applicable wear a mask when</div>
                <div className='pdb14 p10'>when crossing busy streets</div>
            </div>
        </div>
    )
}

export default AirQuality