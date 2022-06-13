const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Query {
        getCityByName(cityname: String): WeatherResponseCityName
        getCityByLocation(lon: Float, lat: Float): WeatherResponseLonLat
        getPollutionindex(lon: Float, lat: Float): AirPollution
    }
    type AirPollution {
        list: [List]
    }
    type List {
        main: Aqi
    }

    type Aqi {
        aqi:  Int
    }
    type WeatherResponseCityName {
        id: ID
        coord: Coordinates
    }
    type WeatherResponseLonLat {
        timezone: String
        current: Current
        hourly: [Hourly]
        daily: [Daily]
    }

    type Daily {
        dt: Int
        temp: Temp
        pop: Float
        weather: [Dweather]
    }
    type Dweather {
        id: Int
        main: String
        description: String
        icon: String
    }

    type Temp {
        min: Float
        max: Float
    }
    type Current {
        dt: Int
        sunrise: Int
        sunset: Int
        humidity: Int
        uvi: Float
        dew_point: Float
        weather: Weather
    }

    type Hourly {
        dt: Int
        temp: Float
        humidity: Int
        weather: [Weather]
    }
    type Weather {
        id: Int
        icon: String
        description: String
    }
    type Coordinates {
        lon: Float
        lat: Float
    }
`;

module.exports = typeDefs;
