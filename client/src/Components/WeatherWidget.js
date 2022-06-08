import React, { useEffect, useState } from 'react'
import './WeatherWidget.css'
import cloud from '../utils/cloud.svg'
import { useLazyQuery } from '@apollo/client';
import Localbase from 'localbase'
import {
    QUERY_CITY_NAME,
    QUERY_CITY_LOCATION
} from '../utils/query'
function WeatherWidget() {
    const [CurrentCityText, setCurrentCityText] = useState('Manila')
    const [getWeather] = useLazyQuery(QUERY_CITY_NAME);
    const [getWeatherLocation] = useLazyQuery(QUERY_CITY_LOCATION);
    const [dataFromDb, setDataFromDb] = useState({})
    const [isLoading, setLoading] = useState(true)
    let db = new Localbase('weatherDb')
    // sets the value input from search
    const handleCityText = (event) => {
        const { value } = event.target
        setCurrentCityText(value)
    }

    // takes the current time when called then adds 12 hours (milliseconds format)
    const getExpireTimer = () => {
        const now = new Date().getTime()
        // 12 hours to milliseconds
        const expireToken = 43200000
        const newExpireToken = now + expireToken
        return newExpireToken
    }
    // when called will take the API JSON, and API query cityname and insert to Database
    const addDataToDb = async (data, cityName) => {
        try {
            await db.collection('weatherDb').add({
                metadata: data,
                city: cityName,
                expire: getExpireTimer()
            })
        } catch (e) {
            console.log(e)
        }

    }
    // function called to delete document in the indexdb
    const deleteDataDb = async (cityName) => {
        try {
            await db.collection('weatherDb').doc({ city: cityName }).delete()
        } catch (e) {
            console.log(e)
        }

    }

    const getDataDb = async (cityName) => {
        try {
            const data = await db.collection('weatherDb').doc({ city: cityName }).get()
            console.log(data)
            const datadb = await setDataFromDb(data)
            return datadb

        } catch (e) {
            console.log(e)
        }
    }

    const checkIfExpired = async (cityName) => {
        const now = new Date().getTime()
        // try {
        //     const datafromDbisExpired = await db.collection('weatherDb').doc({ city: cityName }).get()
        //     console.log(datafromDbisExpired)
        //     if (typeof datafromDbisExpired === 'undefined') {
        //         return true
        //     }
        //     if (datafromDbisExpired.expire < now) {
        //         console.log(`checkDatabase() has found that the entry is expired and now will perform a delete, fetch, add to refresh data`)
        //         await deleteDataDb(cityName)
        //         const response = await FetchCityByName(cityName)
        //         await addDataToDb(response, cityName)
        //         return true
        //     }
        //     return false
        // } catch (e) {
        //     console.log(e)
        // }

    }

    // const checkDatabase = async (cityName) => {
    //     try {
    //         const datafromDb = await db.collection('weatherDb').doc({ city: cityName }).get()
    //         if (typeof datafromDb === 'undefined') {
    //             console.log(`checkDatabase() has found no entry with this function ${cityName} and will perform an API Call`)
    //             const response = await FetchCityByName(cityName)
    //             console.log(response)
    //             // await addDataToDb(response, cityName)
    //             // return false
    //         }
    //         return true
    //     } catch (e) {
    //         console.log(e)
    //     }

    // }

    async function SubmitRequest() {
        const cityName = CurrentCityText
        // if submission is left blank
        if (cityName === '') return
        console.log('submit request ran')
        await FetchCityByName(cityName)

    }


    // fetches using the variable then calls on function below
    const FetchCityByName = async (cityName) => {
        try {
            const cityNameData = await getWeather({ variables: { cityname: cityName } })
            console.log(cityNameData)
            const { lon, lat } = cityNameData.data.getCityByName.coord
            const fetchData = await FetchCityByCoord(lon, lat)
            return fetchData
        } catch (e) {
            console.log(e)
        }


    }

    // fetches using the lon and lat from FetchCityByName
    const FetchCityByCoord = async (lon, lat) => {
        const cityCoordData = await getWeatherLocation({ variables: { lon: lon, lat: lat } })
        const cityCoordDataParse = cityCoordData.data.getCityByLocation
        console.log(cityCoordDataParse)
        return cityCoordDataParse
    }

    return (
        <>
            <form onSubmit={(e) => SubmitRequest(e)}>
                <label >
                    Name:
                    <input type="text" value={CurrentCityText} onChange={handleCityText} />
                </label>
                <input type="submit" value="Submit" />
            </form>

            <div className='WeatherWidget'>

                {dataFromDb &&
                    <div className='WidgetData'>
                        <div className='h32 p32 pdb8'>
                            {/* {isLoading ?
                                <div>.....</div> :
                                <div>{dataFromDb.metadata.current.temp} </div>

                            } */}

                        </div>
                        <div className='d pdb8'>
                            <div className='p16 pr4'>H:70°</div>
                            <div className='p16'>L:68°</div>
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