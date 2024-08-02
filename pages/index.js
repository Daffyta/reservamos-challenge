import { useState } from 'react';
import Head from 'next/head';
import CityInput from '../components/CityInput';
import WeatherList from '../components/WeatherList';
import { getCoordinates, getWeatherData } from '../services/api';

const Home = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState('');

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleAddCity = async () => {
    setError('');
    try {
      const { lat, lon, name } = await getCoordinates(city);
      const weather = await getWeatherData(lat, lon);
      setWeatherData((prevData) => [...prevData, weather]);
      setCities((prevCities) => [...prevCities, name]);
      setCity('');
    } catch (error) {
      setError('Error fetching data');
    }
  };

  const handleClear = () => {
    setCity('');
    setCities([]);
    setWeatherData([]);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Head>
        <title>Reservamos weather</title>
        <meta name="description" content="Get the weather forecast for the next 5 days for any city." />
      </Head>
      <h1 className="text-4xl font-bold mt-12">Weather Forecast</h1>
      <CityInput 
        city={city} 
        onCityChange={handleCityChange} 
        onAddCity={handleAddCity} 
        onClear={handleClear} 
      />
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <div className="flex flex-wrap justify-center">
        {weatherData.map((data, index) => (
          <WeatherList key={index} weatherData={data} city={cities[index]} />
        ))}
      </div>
    </div>
  );
};

export default Home;


