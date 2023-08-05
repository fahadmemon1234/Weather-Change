// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';

// const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
// const API_URL = 'https://pro.openweathermap.org/data/2.5/weather?q=Lahore&appid=3500aa8ab775cb0cb97ead2b9fc41866&units=metric';

function Fetchapi() {
  const [weatherData, setWeatherData] = useState(null);
  const [searchInput, setSearchInput] = useState(''); // Default location is set to Karachi
 
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    if (searchInput.trim() === '') {
      // If the search input is empty or contains only whitespace, do nothing.
      return;
    }
    fetchWeatherData();
  };


  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {


      // var location = "Karachi"
      const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
const API_URL = `https://pro.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=3500aa8ab775cb0cb97ead2b9fc41866&units=metric`;

      const response = await axios.get(API_URL, {
        params: {
          // q: "Lahore",
          // appid: API_KEY,
          // units: 'metric',
        },
      });
      setWeatherData(response.data);
    } catch (error) {
      console.log('Error fetching weather data:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Weather Search Then Show Card</h1>


      <div className="input-group mb-3">
        <input
          type="search"
          className="form-control"
          placeholder="Search your location"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={searchInput}
          onChange={handleInputChange}
        />
        <button type="button" className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>


      <br/>
      <br/>

      
      {weatherData && (
        <WeatherCard
          city={weatherData.name}
          temperature={weatherData.main.temp}
          sunrise={weatherData.sys.sunrise}
          sunset={weatherData.sys.sunset}
          weathericon={weatherData.weather[0].icon}
          weather={weatherData.weather[0].main}
          pressure={weatherData.main.pressure}
          Humidity={weatherData.main.humidity}
          Wind={weatherData.wind.speed}
          Wind1={weatherData.wind.deg}
        />
      )}
    </div>
  );
};

export default Fetchapi;
