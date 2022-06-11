import React, { useContext } from 'react'
import './Hour.css'
import cloud from '../../utils/cloud.svg'
import moment from 'moment-timezone';
import ApiContext from '../ApiContext'
function Hour({ temp, weather, dt, today, timezone, padding, className }) {

  const weatherx = ` http://openweathermap.org/img/wn/${weather}@4x.png`
  const { isLoading,
  } = useContext(ApiContext)
  const currentDt = moment.unix(dt).utc().tz(timezone).format('ha')
  return (
    <>{
      isLoading ? <div></div> : <>
        < div className={className} style={
          padding
        } >
          <div>
            {today ? <div>NOW</div> : <div>{currentDt}</div>}
          </div>

          <div className="HourImg md8">
            {isLoading ?
              <img className='HourImgSvg' src={cloud} alt="react" /> :
              <img className='HourImgSvg' src={weatherx} alt="react" />
            }
          </div>
          <div className='md8'>{Math.floor(temp)}°</div>
        </div >
      </>
    }
    </>
  )
}

export default Hour