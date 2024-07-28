import React, { useState } from "react"

import './WeatherApp.css'

import search_icon from '../Assests/search.png'
import clear from '../Assests/clear.png'
import cloudy from '../Assests/cloudy.png'
import drizzle from '../Assests/drizzle.jpg'
import humidity from '../Assests/humidity.png'
import rain from '../Assests/rain.png'
import snow from '../Assests/snow.png'
import wind from '../Assests/wind.jpg'

//used images from flaticon


const WeatherApp = () => {

    let api_key = "24fd835c005b8dfe05d1e12d2b8244ec";

    const [wicon, setWicon] = useState(cloudy);


    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value === "") {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();

        

        const humidity_data = document.getElementsByClassName("humidity-percent");
        const wind_data = document.getElementsByClassName("wind-rate");
        const temp_data = document.getElementsByClassName("temp");
        const loc_data = document.getElementsByClassName("loc");

        humidity_data[0].innerHTML = Math.floor(data.main.humidity) + "%";
        wind_data[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
        temp_data[0].innerHTML = Math.floor(data.main.temp) + "°C";
        loc_data[0].innerHTML = data.name;

        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            setWicon(clear);
        }

        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
            setWicon(cloudy);
        }

        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
            setWicon(drizzle);
        }

        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
            setWicon(drizzle);
        }

        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
            setWicon(rain);
        }

        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
            setWicon(rain);
        }

        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
            setWicon(snow);
        }
        else {
            setWicon(clear);
        }

    }




    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Enter city name " />
                <div className="search-icon" onClick={() => { search() }}>
                    <img src={search_icon} alt="" />
                </div>
            </div>

            <div className="icon">
                <img src={wicon} alt="" />
            </div>

            <div className="info">
                <div className="temp">
                    18°C
                </div>

                <div className="loc">
                    London
                </div>
            </div>

            <div className="more-info">
                <div className="hum">
                    <img src={humidity} alt="" />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>

                <div className="wind">
                    <img src={wind} alt="" />
                    <div className="data2">
                        <div className="wind-rate">18km/h</div>
                        <div className="text">Wind</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp;