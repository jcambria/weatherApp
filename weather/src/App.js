import React, {useState} from "react";
import { getWeather } from "./api/getWeather";
import './App.css';
import CityNameHeader from "./CityNameHeader";


const App = () => {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})
    const [fahrenheit, setFahrenheit] = useState()
    // const [buttonText, setButtonText] = useState('See Fahrenheit')

    const search = async (e) => {
        if(e.key == 'Enter') {
            const data = await getWeather(query)
            // console.log(data)
            setWeather(data)
            setQuery('')

        }
    }

    const computeF = () => {
     Math.round(weather.main.temp * 9/5 + 32)


    }


    const toggleFahrenheitButton = () => {

        setFahrenheit(!fahrenheit)
        
        console.log(Math.round(weather.main.temp * 9/5 + 32))

    }

    const buttonText = () => {
        if(fahrenheit){
            return "Hide Fahrenheit"
        }
        else {
            return "Show Fahrenheit"
        }
    }





    return (
        <div className="main-container">
            <input
                type="text"
                className="search"
                placeholder="Search ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}

            />
            {weather.main && (
                <div className="city">
                    <CityNameHeader weather={weather} />
                   
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg; C</sup>

                        <div className="city-temp"> 
                        {Math.round(weather.main.temp * 9/5 + 32)}
                        
                        <sup>&deg; F</sup>
                        <div>
                        <button onClick={() => toggleFahrenheitButton()}>{buttonText()}</button>
                        </div>
                        </div>
                        {/* <button onClick={fahrenheit}>See &deg; F</button> */}
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}  alt="weather icon"/>
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>

            )}

        </div>
    );
}

export default App;