import React, { useState } from "react";
import { getWeather } from "./api/getWeather";
import "./App.css";
import CityNameHeader from "./CityNameHeader";
import PerhapsFarenheit from "./PerhapsFarenheit";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [fahrenheit, setFahrenheit] = useState();
  // const [buttonText, setButtonText] = useState('See Fahrenheit')

  const search = async (e) => {
    if (e.key == "Enter") {
      const data = await getWeather(query);
      setWeather(data);
      setQuery("");
    }
  };


  const toggleFahrenheitButton = () => {
    setFahrenheit(!fahrenheit);

  };

  const buttonText = () => {
    if (fahrenheit) {
      return "Hide Fahrenheit";
    } else {
      return "Show Fahrenheit";
    }
  };

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

            <PerhapsFarenheit weather={weather} farenheit={fahrenheit} />
            <button id="showFahrenheit" onClick={() => toggleFahrenheitButton()}>
              {buttonText()}
            </button>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
            <p>{weather.weather[0].description}</p>
            <p className="minMax">Min temp: {weather.main.temp_min} <sup>&deg; c </sup>, {Math.round((weather.main.temp_min * 9) / 5 + 32)} <sup>&deg; f</sup> </p> 
            
            <p className="minMax">Max temp: {weather.main.temp_max} <sup>&deg; c</sup> , {Math.round((weather.main.temp_max * 9) / 5 + 32)} <sup>&deg; f</sup>  </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
