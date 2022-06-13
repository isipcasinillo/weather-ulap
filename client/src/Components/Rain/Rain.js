import React , {useContext} from 'react'
import './../Rain/Rain.css'
import ApiContext  from '../ApiContext'
function Rain() {
    const { arrayData,hourlyData
    } = useContext(ApiContext)
    return (
        <div className="Rain">
            <div className='RainContainer p8 cw'>
                <div className='pdb16 p12'>RAIN</div>
                <div className='pdb8 p32'>{arrayData[0]?.pop * 100}%</div>
                <div className='pb60 p16'>Chance of rain</div>
                <div className='pb16 p10'>{hourlyData[0]?.weather[0].description}</div>
            </div>
        </div>
    )
}

export default Rain