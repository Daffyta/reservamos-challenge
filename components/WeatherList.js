import React from 'react';
import WeatherItem from './WeatherItem';

const WeatherList = ({ weatherData, city }) => {
  const getDailyForecasts = (list) => {
    const dailyForecasts = [];
    const dates = new Set();

    for (const forecast of list) {
      const date = new Date(forecast.dt * 1000).toDateString();
      if (!dates.has(date)) {
        dailyForecasts.push(forecast);
        dates.add(date);
      }
      if (dailyForecasts.length === 5) {
        break;
      }
    }

    return dailyForecasts;
  };

  const dailyForecasts = getDailyForecasts(weatherData.list);

  return (
    <div className="mt-8 mx-4">
      <h2 className="text-2xl font-bold mb-4">Weather forecast for {city}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {dailyForecasts.map((forecast, index) => (
          <WeatherItem key={index} forecast={forecast} />
        ))}
      </div>
    </div>
  );
};

export default WeatherList;