import React, { useContext } from "react";
import "./HourlyContainer.css";
import Hour from "../Hour/Hour";
import ApiContext from "../ApiContext";

function HourlyContainer() {
    const { hourlyData, isLoading, timezone
    } = useContext(ApiContext)
    return (
        <>
            <div className="WeatherHourlyWrapper">
                <div className="WeatherHourly">
                    {hourlyData &&
                        hourlyData.map((hour, index) => {
                            if (index === 0) {
                                return < Hour key={index + Math.random()
                                } timezone={timezone} isLoading={isLoading} className={'WeatherHour'} temp={hour.temp} weather={hour.weather[0]?.icon} dt={hour.dt} today={'Today'} />
                            }
                            if (index === hourlyData.length - 1) {
                                return < Hour key={index + Math.random()
                                } timezone={timezone} isLoading={isLoading} className={'WeatherHour last'} temp={hour.temp} weather={hour.weather[0]?.icon} dt={hour.dt} />
                            }
                            return <Hour key={index + Math.random()} className={'WeatherHour'} timezone={timezone} isLoading={isLoading} temp={hour.temp} weather={hour.weather[0]?.icon} dt={hour.dt} />

                        })}
                </div>
            </div>
        </>
    );
}

export default HourlyContainer;
