import React, { useContext } from 'react'
import './WeatherWidget.css'
import cloud from '../utils/cloud.svg'
import ApiContext from './ApiContext'
function WeatherWidget() {
    const { dataFromDb, isLoading } = useContext(ApiContext)
    return (

        <>
            <div className='WeatherWidget'>
                {dataFromDb &&
                    <div className='WidgetData'>
                        <div className='h32 p32 pdb8'>
                            {isLoading ?
                                <div>.....</div> :
                                <div>{Math.floor(dataFromDb.metadata.daily[1].temp.max)}° </div>

                            }

                        </div>
                        <div className='d pdb8'>
                            {isLoading ? <div className='p16 pr4'>H:0.00°</div> :
                                <div className='p16 pr4'>H:{Math.floor(dataFromDb.metadata.daily[1].temp.max)}°</div>
                            }
                            {isLoading ? <div className='p16 pr4'>H:0.00°</div> :
                                <div className='p16'>L: {Math.floor(dataFromDb.metadata.daily[1].temp.min)}°</div>
                            }
                        </div>

                        <div className='p16'>
                            {dataFromDb.city}
                        </div>
                    </div>}

                <div>
                    <img className='WidgetImg' src={cloud} alt="weather-icon">
                    </img>
                </div>
            </div>
        </>

    )
}

export default WeatherWidget