import React from 'react'
import './WeekElement.css'
import cloud from './../utils/cloud.svg'
import Moment from 'react-moment';
function WeekElement({ hitemp, lowtemp, pop, dt, today, icon }) {
  const weather = ` http://openweathermap.org/img/wn/${icon}@4x.png`
  const currentDate = new Date(dt * 1000)
  return (
    <>
      <div className="DayCard">
        <div className='CurrentDay asc p16'>
          {today ? <div>{today}</div> : <Moment format="ddd">{currentDate}</Moment>}
          {/* <Moment format="ddd">{currentDate}</Moment> */}

        </div>
        <div className='CurrentDate asc p16'>
          <Moment format="MM/DD">{currentDate}</Moment></div>
        <div className='CurrentHighTemp asc p16'>{Math.floor(hitemp)}°</div>
        <div className='CurrentLowTemp asc p16'>{Math.floor(lowtemp)}°</div>
        <div className='CurrentIcon'>
          <img className='s16 CurrentIconCloud' src={weather} alt="cloudsvg"></img>
        </div>
        <div className='currentIconRain p8'>
          {Math.floor(pop)}%
        </div>
      </div>
    </>
  )
}

export default WeekElement