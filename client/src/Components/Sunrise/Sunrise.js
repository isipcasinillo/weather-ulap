import React , {useContext} from 'react'
import './../Sunrise/Sunrise.css'
import moment from 'moment-timezone';
import ApiContext  from '../ApiContext'
function Sunrise() {
    const { currentData,timezone
    } = useContext(ApiContext)
    const sunrise = moment.unix(currentData?.sunrise).tz(timezone)?.format('h:ma')
    const sunset = moment.unix(currentData?.sunset).tz(timezone)?.format('h:ma')
    return (
        <div className="UvIndex">
            <div className='UvIndexContainer p8 cw'>
                <div className='pdb16 p12'>SUNRISE</div>
                <div className='pdb8 p32 '>{sunrise}</div>
                <div className='pdb42 p16'>Sunset: <span>{sunset}</span></div>
                <div className='pdb8 p10'>Outside activities can be done</div>
                <div className='pdb14 p10'>without any artificial light</div>
            </div>
        </div>
    )
}

export default Sunrise