import React, { useContext } from 'react'
import './Hour.css'
import cloud from '../../utils/cloud.svg'
import Moment from 'react-moment';
import ApiContext from '../ApiContext'
function Hour({ temp, weather, dt, today }) {
  const weatherx = ` http://openweathermap.org/img/wn/${weather}@4x.png`
  const { isLoading,
  } = useContext(ApiContext)
  const currentDt = new Date(dt * 1000)
  return (
    <>
      <div className='WeatherHour'>
        <div>
          {today ? <div>NOW</div> : <div><Moment format="hA">{currentDt}</Moment></div>}
        </div>

        <div className="HourImg md8">
          {isLoading ?
            <img className='HourImgSvg' src={cloud} alt="react" /> :
            <img className='HourImgSvg' src={weatherx} alt="react" />
          }

        </div>

        <div className='md8'>{Math.floor(temp)}°</div>
      </div>
    </>
  )
}

export default Hour