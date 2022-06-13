import React, {useContext} from 'react'
import './../Temperature/Temperature.css'
import ApiContext  from '../ApiContext'
function Temperature() {
    const { arrayData,
    } = useContext(ApiContext)
    return (
        <div className="Temperature">
            <div className='TemperatureContainer p8 cw'>
                <div className='pdb16 p12'>TEMPERATURE</div>
                <div className='HiLowTemp'>
                    <div>
                        <div className='p32 pdb8'>{Math.floor(arrayData[0]?.temp.max)}°</div>
                        <div className='pdb42 p16'>Highest</div>
                    </div>
                    <div className='pdl30'>
                        <div className='p32 pdb8'>{Math.floor(arrayData[0]?.temp.min)}°</div>
                        <div className='pdb42 p16'>Lowest</div>
                    </div>
                </div>

                <div className='pdb8 p10'>Sunscreen is recommended</div>
                <div className='pdb14 p10'>Read more about sunscreens</div>
            </div>
        </div>
    )
}

export default Temperature