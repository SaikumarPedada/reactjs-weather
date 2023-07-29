import React from 'react';
import './styles.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';

const refresh = () => {
  window.location.reload();
}

const WeatherCard = ({weatherData}) => (
  <div className="main">

      <div className="top">
        <p className="header">{weatherData.name}</p>
        <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
      </div>
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description"><h2>{weatherData.weather[0].main}</h2></p>
      </div>

      <div className="flex">
        <p className="temp">Temperature: <b>{weatherData.main.temp} </b>&deg;C</p>
        <p className="temp">Humidity:<b>{weatherData.main.humidity} %</b></p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="sunrise-sunset">Sunset:{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>
    
  </div>
)

export default WeatherCard;