const fetch = require('node-fetch')
const API_KEY = '43eda6c0164920e3be631f60e0e1b057'
const resolvers = {
    Query: {
        getCityByName: async (_, { cityname }) => {
            try {
                // https://api.openweathermap.org/data/2.5/weather?q=Manila&appid=43eda6c0164920e3be631f60e0e1b057
                const citynameString = cityname.toLowerCase()
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citynameString
                    }&appid=${API_KEY}`)
                if (response.status === 404) {
                    return false
                }
                const responseJ = await response.json();
                return responseJ

            } catch (e) {
                console.log(e)
            }
        },
        getCityByLocation: async (_, { lon, lat }) => {
            try {
                // https://api.openweathermap.org/data/2.5/onecall?lat=14.5995&lon=120.984222&appid=43eda6c0164920e3be631f60e0e1b057
                const responselonlat = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=imperial&appid=${API_KEY}`)
                const responseL = await responselonlat.json()
                return responseL
            } catch (e) {
                console.log(e)
            }
        }
    },
};

module.exports = resolvers;


