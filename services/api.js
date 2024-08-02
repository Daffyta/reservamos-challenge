import axios from 'axios';

const OPENWEATHER_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const RESERVAMOS_API_ENDPOINT = 'https://search.reservamos.mx/api/v2/places';

export const getCoordinates = async (cityName) => {
  try {
    const response = await axios.get(`${RESERVAMOS_API_ENDPOINT}?q=${cityName}`);
    const cityData = response.data.find(place => place.result_type === 'city');
    if (cityData) {
      return { lat: cityData.lat, lon: cityData.long, name: cityData.display };
    } else {
      throw new Error('City not found');
    }
  } catch (error) {
    throw new Error('Error fetching city coordinates');
  }
};

export const getWeatherData = async (lat, lon) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
      params: {
        lat,
        lon,
        units: 'metric',
        appid: OPENWEATHER_API_KEY
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};