import React, { useEffect, useState } from 'react'
import './WeatherWidget.css'
import cloud from '../utils/cloud.svg'
import Expiry from '../utils/Expiry'
function WeatherWidget() {
    const API_KEY = '43eda6c0164920e3be631f60e0e1b057'
    const API_KEY2 = 'ca6c81590b718f3e0d2eb5c80b2483b7'
    const city = 'dallas'
    const [hello, setHello] = useState('')
    // const [ExpiryDate, setExpiry] = useState();
    // const [CurrentDate, setLastDate] = useState();
    // const [currentCityText, setCurrentCityText] = useState('')

    // // sets the current hour plus 24 hours this is computed in milliseconds //
    // const handleCityText = (event) => {
    //     const { value } = event.target
    //     setCurrentCityText(value)

    // }

    // const handleCityTextSubmit = async (event) => {
    //     event.preventDefault()
    //     const pastCitySearch = localStorage.getItem("City")
    //     if (currentCityText === pastCitySearch) {
    //         return;
    //     }
    //     try {
    //         fetchCity()
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }
    // const add24hours = (date) => {
    //     const Milliseconds23hours = 82800000
    //     const ExpiredDate = date.getTime() + Milliseconds23hours
    //     localStorage.setItem("Expire", ExpiredDate)

    //     return ExpiredDate
    // }

    // const addCurrentDate = () => {
    //     const InitialDateLogged = new Date().getTime()
    //     localStorage.setItem("Current", InitialDateLogged)

    // }

    // const FetchOnClick = () => {
    //     if (ExpiryDate < CurrentDate) {
    //         console.log('Can fetch now!')
    //         // addCurrentDate()
    //         // add24hours(new Date())
    //     } else {
    //         console.log(`Will fetch in ${(ExpiryDate - CurrentDate) / 3600000
    //             } hours`)
    //     }
    // }


    // const InitialStateSetup = () => {
    //     if (typeof ExpiryDate === 'undefined') {
    //         addCurrentDate()
    //         add24hours(new Date())

    //     }

    // }
    // const fetchCity = async function () {

    //     try {
    //         const fetch_data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCityText}&appid=${API_KEY}`)
    //         if (fetch_data.ok) {
    //             localStorage.setItem("City", currentCityText)
    //             const fetch_data_response = await fetch_data.json()
    //             console.log(fetch_data_response)
    //             const lon = fetch_data_response.coord.lon
    //             const lat = fetch_data_response.coord.lat
    //             const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${API_KEY}`)
    //             const response_data = await response.json()
    //             console.log(response_data)
    //         } else {
    //             console.log('erro')
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <>
            {/* <form onSubmit={handleCityTextSubmit}>
                <label>
                    City Search
                    <input type="text" name="city" value={currentCityText}
                        onChange={handleCityText} />
                </label>
                <input type="submit" value="Submit" />
            </form> */}
            <div className='WeatherWidget'>
                <div className='WidgetData'>
                    <div className='h32 p32 pdb8'>
                        68°
                    </div>
                    <div className='d pdb8'>
                        <div className='p16 pr4'>H:70°</div>
                        <div className='p16'>L:68°</div>
                    </div>
                    <div className='p16'>
                        Dallas, Texas
                    </div>
                </div>
                <div>
                    <img className='WidgetImg' src={cloud} alt="weather-icon">
                    </img>
                </div>
            </div>
        </>

    )
}

export default WeatherWidget