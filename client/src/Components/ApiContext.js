
import { useLazyQuery } from '@apollo/client';
import React, { createContext, useEffect, useState } from 'react'
import Localbase from 'localbase'
import {
    QUERY_CITY_NAME,
    QUERY_CITY_LOCATION
} from '../utils/query'
const ApiContext = createContext({})

export const ApiProvider = ({ children }) => {
    const [CurrentCityText, setCurrentCityText] = useState(localStorage.getItem('Lastcity') == null ? 'dallas' : localStorage.getItem('Lastcity'))
    const [getWeather] = useLazyQuery(QUERY_CITY_NAME);
    const [getWeatherLocation] = useLazyQuery(QUERY_CITY_LOCATION);
    const [dataFromDb, setDataFromDb] = useState({})
    const [arrayData, setArrayData] = useState([])
    const [hourlyData, setHourlyData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [timezone, setTimezone] = useState('')
    let db = new Localbase('weatherDb')

    const handleCityText = (event) => {
        const { value } = event.target
        setCurrentCityText(value.toLowerCase())
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
            await setDataFromDb(data)

        } catch (e) {
            console.log(e)
        }
    }

    const checkIfExpired = async () => {
        const now = new Date().getTime()
        try {
            const datafromDbisExpired = await db.collection('weatherDb').doc({ city: CurrentCityText }).get()
            if (!datafromDbisExpired) return true
            if (await datafromDbisExpired.expire < now) {
                console.log(`checkDatabase() has found that the entry is expired and now will perform a delete, fetch, add to refresh data`)
                await deleteDataDb()
                const responseCheck = await FetchCityByName()
                if (!responseCheck) {
                    return false
                }
                console.log(responseCheck)
                await addDataToDb(responseCheck, CurrentCityText)

            }
            return true

        } catch (e) {
            console.log(e)
        }
    }

    const checkDatabase = async () => {
        const isDocumentinDb = await db.collection('weatherDb').doc({ city: CurrentCityText }).get()
        try {
            // if document does not exist in database
            if (isDocumentinDb == null) {
                const fetchFromApi = await FetchCityByName()
                if (!fetchFromApi) {
                    return false
                }

                await addDataToDb(fetchFromApi, CurrentCityText)
            }
            return true
        } catch (e) {
            console.log(e)
        }

    }
    const InitializeData = async () => {
        if (CurrentCityText === '') {
            setCurrentCityText(localStorage.getItem('Lastcity'))
        }
        const x = await checkDatabase()
        const y = await checkIfExpired() // true
        if (x && y) {
            await getDataDb()
            await setLoading(false)
            const response = await db.collection('weatherDb').doc({ city: CurrentCityText }).get()
            const timezoneData = response.metadata.timezone
            setTimezone(timezoneData)
            const dailyarray = response.metadata.daily
            const hourlyarray = response.metadata.hourly
            await setArrayData(dailyarray)
            await setHourlyData(hourlyarray)
            localStorage.setItem('Lastcity', CurrentCityText)
        }
    }
    const SubmitRequest = async (e) => {

        e.preventDefault()
        await InitializeData()


    }
    // fetches using the variable then calls on function below to call with lon and lat
    const FetchCityByName = async () => {
        try {
            const y = CurrentCityText
            const getWeatherApiResponse = await getWeather({ variables: { cityname: y } })
            const err = getWeatherApiResponse.data.getCityByName.coord
            if (err === null) {
                setCurrentCityText(localStorage.getItem('Lastcity'))
                return
            }
            localStorage.setItem('Lastcity', y)
            const { lon, lat } = getWeatherApiResponse.data.getCityByName.coord
            const getWeatherLocationResponse = await getWeatherLocation({ variables: { lon: lon, lat: lat } })


            const ResponseData = getWeatherLocationResponse.data.getCityByLocation
            return ResponseData
        } catch (e) {
            return
        }
    }
    useEffect(() => {
        setCurrentCityText(localStorage.getItem('Lastcity'))
        InitializeData()
    }, [])

    return (
        <ApiContext.Provider value={{
            CurrentCityText,
            SubmitRequest,
            handleCityText,
            dataFromDb,
            isLoading,
            arrayData,
            hourlyData,
            timezone
        }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiContext