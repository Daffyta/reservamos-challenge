import React from 'react';
import { format } from 'date-fns';

const WeatherItem = ({ forecast }) => {
  const { weather } = forecast;
  const formattedDate = format(new Date(forecast.dt * 1000), 'EEEE, MMM dd');
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="bg-white shadow rounded-lg p-4 m-2 w-64 flex flex-col items-center">
      <p className="font-semibold">{formattedDate}</p>
      <img src={iconUrl} alt={weather[0].description} className="w-16 h-16" />
      <p>Max: {forecast.main.temp_max}°C</p>
      <p>Min: {forecast.main.temp_min}°C</p>
    </div>
  );
};

export default WeatherItem;