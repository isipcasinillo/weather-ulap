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
    useEffect(() => {
        getDataDb()
    }, [])
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
    const deleteDataDb = async () => {
        try {
            await db.collection('weatherDb').doc({ city: CurrentCityText }).delete()
        } catch (e) {
            console.log(e)
        }

    }

    const getDataDb = async () => {
        try {
            const data = await db.collection('weatherDb').doc({ city: CurrentCityText }).get()
            console.log(data)
            const datadb = await setDataFromDb(data)
            return datadb

        } catch (e) {
            console.log(e)
        }
    }

    const checkIfExpired = async () => {
        const now = new Date().getTime()
        try {
            const xy = await db.collection('weatherDb').doc({ city: CurrentCityText }).get()
            if(!xy) {
                console.log('check if expired is undefined')
                const cityNameData = await getWeather({ variables: { cityname: CurrentCityText } })
                await addDataToDb(cityNameData, CurrentCityText)
                return true
            }
            // this is expired
            const datafromDbisExpired = await db.collection('weatherDb').doc({ city: CurrentCityText }).get()
            console.log(datafromDbisExpired.expire)
            if (await datafromDbisExpired.expire < now) {
                console.log(`checkDatabase() has found that the entry is expired and now will perform a delete, fetch, add to refresh data`)
                await deleteDataDb()
                const response = await FetchCityByName(CurrentCityText)
                await addDataToDb(response, CurrentCityText)
                return true
            }
            console.log('not expired')
            return false
        } catch (e) {
            console.log(e)
        }
    }

    const checkDatabase = async () => {
        const isDocumentinDb = await db.collection('weatherDb').doc({ city: CurrentCityText }).get()
        try {
            // if document does not exist in database
            if (!isDocumentinDb) {
                const fetchFromApi = await FetchCityByName()
                await addDataToDb(fetchFromApi, CurrentCityText)
                // returns false because function checks if data is in database
                return false
            }
                // returns true if document exists in database
                return true
        } catch (e) {
            console.log(e)
        }

    }
    const SubmitRequest = async(e) =>{
        e.preventDefault()
        await checkDatabase()
        await checkIfExpired()
        await getDataDb()
    }
    
    // fetches using the variable then calls on function below to call with lon and lat
    const FetchCityByName = async () => {
        try { 
            const getWeatherApiResponse = await getWeather({ variables: { cityname: CurrentCityText } })
            const { lon, lat } = getWeatherApiResponse.data.getCityByName.coord
            await FetchCityByCoord(lon, lat)
        } catch (e) {
            console.log(e)
        }
    }

    // fetches using the lon and lat from FetchCityByName
    const FetchCityByCoord = async (lon, lat) => {
        const getWeatherLocationResponse = await getWeatherLocation({ variables: { lon: lon, lat: lat } })
        const ResponseData = getWeatherLocationResponse.data.getCityByLocation
        return ResponseData
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