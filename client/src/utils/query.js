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
    timezone
  	hourly{
      dt
      temp
			weather{
        id
        icon
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

