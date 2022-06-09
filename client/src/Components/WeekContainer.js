import React, { useContext, useEffect, useState } from 'react'
import WeekElement from './WeekElement'
import './WeekContainer.css'
import ApiContext from './ApiContext'
function WeekContainer() {

  const { dataFromDb, isLoading, arrayData } = useContext(ApiContext)

  return (
    <>

      <div className='pbm32 WeekContainerComponent'>
        {arrayData &&
          arrayData.slice(1).map((day, index) => {
            if (index === 0) {
              return <WeekElement key={index} hitemp={day.temp.max} lowtemp={day.temp.min} pop={day.pop} dt={day.dt} today={'Today'} />
            }
            return <WeekElement key={index} hitemp={day.temp.max} lowtemp={day.temp.min} pop={day.pop} dt={day.dt} />
          }

          )}
      </div>
    </>
  )
}

export default WeekContainer