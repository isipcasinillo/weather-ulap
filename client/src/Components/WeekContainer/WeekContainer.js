import React, { useContext } from 'react'
import WeekElement from '../WeekElement/WeekElement'
import './WeekContainer.css'
import ApiContext from '../ApiContext'
function WeekContainer() {

  const { arrayData } = useContext(ApiContext)

  return (
    <>

      <div className='pbm32 WeekContainerComponent'>
        {arrayData &&
          arrayData.slice(0, 7).map((day, index) => {
            if (index === 0) {
              return <WeekElement key={index} icon={day.weather[0].icon} hitemp={day.temp.max} lowtemp={day.temp.min} pop={day.pop * 100} dt={day.dt} today={'Today'} />
            }
            return <WeekElement key={index} icon={day.weather[0].icon} hitemp={day.temp.max} lowtemp={day.temp.min} pop={day.pop * 100
            } dt={day.dt} />
          }

          )}
      </div>
    </>
  )
}

export default WeekContainer
