const key = '30e45a2aa5cb4e4453726b1cee064130';

export const APIURL = (lat, lon) => `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${key}`;

export const getCoord = (city) => fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`);
