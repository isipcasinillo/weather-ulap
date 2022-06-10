import React, { useContext } from "react";
import "./HourlyContainer.css";
import Hour from "../Hour/Hour";
import ApiContext from "../ApiContext";

function HourlyContainer() {
    const { hourlyData, isLoading
    } = useContext(ApiContext)
    return (
        <>
            <div className="WeatherHourly">
                {hourlyData &&
                    hourlyData.slice(0, 48).map((hour, index) => {
                        if (index === 0) {
                            return < Hour key={index} isLoading={isLoading} temp={hour.temp} weather={hour.weather[0]?.icon} dt={hour.dt} today={'Today'} />
                        }
                        return <Hour key={index + Math.random()} isLoading={isLoading} temp={hour.temp} weather={hour.weather[0]?.icon} dt={hour.dt} />

                    })}
            </div>
        </>
    );
}

export default HourlyContainer;
