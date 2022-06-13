import { gql } from '@apollo/client'


export const QUERY_CITY_NAME = gql`
  query GETWEATHER_QUERY ($cityname: String){
    getCityByName(cityname: $cityname) {
        coord {
          lon
          lat
        }
    }
}
`;


export const QUERY_CITY_LOCATION = gql`
  query GetCityByLocation ($lat:Float, $lon:Float) {
  getCityByLocation(lon:$lon, lat: $lat) {
    current {
      dt
      sunrise
      sunset
      humidity
      uvi
      dew_point
    }
    timezone
  	hourly{
      dt
      temp
			weather{
        id
        icon
        description
      }
    }
    daily{
      dt
      temp{
        min
        max
      }
      pop
      weather{
        id
        icon
      }
    }
  }
}
`;

export const QUERY_API_POLLUTION = gql`
query getAirPollution ($lon:Float, $lat:Float) {
  getPollutionindex(lon:$lon, lat:$lat){
   	list {
      main{
        aqi
      }
    }
   
  }
}`