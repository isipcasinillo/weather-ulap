import React from 'react'
import './../AirQuality/AirQuality.css'
import '../global.css'
function AirQuality() {
    return (
        <div className="AirQuality">
            <div className='AirQualityContainer p8 cw'>
                <div className='pdb16 p12'>AIR QUALITY</div>
                <div className='pdb8 p32 '>68 <span className='p16'>per ozone</span></div>
                <div className='pdb42 p16'>Fair</div>
                <div className='pdb8 p10'>If applicable wear a mask when</div>
                <div className='pdb14 p10'>when crossing busy streets</div>
            </div>
        </div>
    )
}

export default AirQuality