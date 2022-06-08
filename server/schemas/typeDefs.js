const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Query {
        getCityByName(cityname: String): WeatherResponseCityName
        getCityByLocation(lon: Float, lat: Float): WeatherResponseLonLat
    }
    type WeatherResponseCityName {
        id: ID
        coord: Coordinates
    }
    type WeatherResponseLonLat {

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

    }
    type Hourly {
        temp: Float
        humidity: Int
        weather: [Weather]
    }
    type Weather {
        id: Int
        icon: String
    }
    type Coordinates {
        lon: Float
        lat: Float
    }
`;

module.exports = typeDefs;
