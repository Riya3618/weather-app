import moment from 'moment/moment';
import React from 'react';
import './styles.css';
import { Button } from 'semantic-ui-react';

const refresh = () => {
    window.location.reload();
  }
const WeatherCard=({weatherData})=>{
  if (weatherData.cod !== 200) {
    return ;
   }
   return(
    <div className="main">
      <div className="top">
        <p className="header">{weatherData.name}</p>
        <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
      </div>
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description"> {weatherData.weather && weatherData.weather.length > 0 ? weatherData.weather[0].main : 'No data available'}</p>
      </div>

      <div className="flex">
        <p className="temp">Temperature: {weatherData.main? `${weatherData.main.temp} °C` : 'No data available'}</p>
        <p className="temp">Humidity: {weatherData.main ? `${weatherData.main.humidity} %` : 'No data available'}</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Sunrise: {weatherData.sys && weatherData.sys.sunrise ? new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN') : 'No data available'}</p>
        <p className="sunrise-sunset">Sunset: {weatherData.sys && weatherData.sys.sunset ? new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN') : 'No data available'}</p>
      </div>
    
  </div>
   );
}
export default WeatherCard;

