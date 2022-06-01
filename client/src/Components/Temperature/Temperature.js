import React from 'react'
import './../Temperature/Temperature.css'
function Temperature() {
    return (
        <div className="Temperature">
            <div className='TemperatureContainer p8 cw'>
                <div className='pdb16 p12'>TEMPERATURE</div>
                <div className='HiLowTemp'>
                    <div>
                        <div className='p32 pdb8'>78°</div>
                        <div className='pd42 p16'>Highest</div>
                    </div>
                    <div className='pdl30'>
                        <div className='p32 pdb8'>68°</div>
                        <div className='pd42 p16'>Lowest</div>
                    </div>
                </div>

                <div className='pdb8 p10'>Sunscreen is recommended</div>
                <div className='pdb14 p10'>Read more about sunscreens</div>
            </div>
        </div>
    )
}

export default Temperature