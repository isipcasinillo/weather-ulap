import React from 'react'
import './WeekElement.css'
import cloud from './../utils/cloud.svg'
function WeekElement() {
  return (
    <>
      <div className="DayCard">
        <div className='CurrentDay asc p16'>Now</div>
        <div className='CurrentDate asc p16'>5/18</div>
        <div className='CurrentHighTemp asc p16'>72°</div>
        <div className='CurrentLowTemp asc p16'>68°</div>
        <div className='CurrentIcon'>
          <img className='s16' src={cloud} alt="cloudsvg"></img>
        </div>
        <div className='currentIconRain p8'>
          10%
        </div>
      </div>
    </>
  )
}

export default WeekElement