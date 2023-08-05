import React from 'react';
import Card from 'react-bootstrap/Card';


const WeatherCard = ({ city, temperature, sunrise, sunset, weather, weathericon, pressure, Humidity, Wind, Wind1 }) => {
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
  const roundedTemperature = Math.floor(temperature); // Rounded temperature without decimal
  const formattedPressure = pressure.toFixed(0); // Format pressure value with 0 decimal places
  const formattedHumidity = Humidity.toFixed(0); // Format humidity value with 0 decimal places
  const formattedWind = (Wind + Wind1).toFixed(1); // Format wind value with 1 decimal place
  
  // Function to get the URL of the weather icon
  const getWeatherIconURL = (iconCode) => {
    return `https://openweathermap.org/img/w/${iconCode}.png`;
  };

  return (
    <Card style={{ backgroundColor: 'rgb(32,33,36)' }}>
      <Card.Body style={{ color: 'white' }}>
        <div className="card" style={{ margin: '0', padding: '20px' }}>
          <div className="card-body">
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 col-sm-6 col-lg-6'>
                  <div style={{ display: 'flex' }}>
                  <img src={getWeatherIconURL(weathericon)} alt="Weather Icon" Width={100} height={90} />
                    <p className="card-text" style={{ fontSize: '25px' }}>{roundedTemperature}<span style={{ fontSize: '20px', paddingLeft: '5px' }}>°C</span></p>
                    <p style={{ border: '1px solid grey', marginLeft: '6px', marginTop: '25px', marginBottom: '25px' }}></p>
                    <p className="card-text" style={{ fontSize: '25px' }}><span style={{ fontSize: '20px', paddingLeft: '4px' }}>°F</span></p>
                    <div style={{ display: 'block' }}>
      <p className="card-text" style={{ fontSize: '13px', paddingLeft: '7px' }}>Precipitation: {formattedPressure} %</p>
      <p className="card-text" style={{ fontSize: '13px', paddingLeft: '7px', marginTop: '-9px' }}>Humidity: {formattedHumidity} %</p>
      <p className="card-text" style={{ fontSize: '13px', paddingLeft: '7px', marginTop: '-9px' }}>Wind: {formattedWind} km/h</p>
    </div>
                  </div>
                </div>
                <div className='col-md-6 col-sm-6 col-lg-6'>
                  <div style={{ float: 'right', marginTop: '-110px', display: 'block' }}>
                    <p className="card-text" style={{ fontSize: '25px' }}>Weather</p>
                    <p className="card-text" style={{ fontSize: '20px', float: 'right', marginTop: '-20px' }}>{city}</p>
                    <p className="card-text" style={{ fontSize: '15px', marginLeft: '37px' }}>{weather}</p>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12 col-lg-12 col-sm-12'>
                  <div>

                  </div>
                </div>
              </div>
            </div>
            {/* <p className="card-text">Sunrise: {sunriseTime}</p>
            <p className="card-text">Sunset: {sunsetTime}</p>
            <p className="card-text">Icon: {weathericon}</p> */}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
