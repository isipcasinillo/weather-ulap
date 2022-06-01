import React from 'react'
import './Hour.css'
import cloud from '../../utils/cloud.svg'
function Hour() {
  return (
    <>
      <div className='WeatherHour'>
        <div>Now</div>
        <div className="HourImg md8">
          <img className='HourImgSvg' src={cloud} alt="react" />
        </div>

        <div className='md8'>101°</div>
      </div>
    </>
  )
}

export default Hour