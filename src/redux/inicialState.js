const citiesData = [{
  name: 'Paris',
  lat: 48.8588897,
  lon: 2.3200410217200766,
  country: 'FR',
  state: 'Ile-de-France',
}, {
  name: 'New York County',
  lat: 40.7127281,
  lon: -74.0060152,
  country: 'US',
  state: 'New York',
}, {
  name: 'Worcester',
  lat: 51.4875167,
  lon: -0.1687007,
  country: 'GB',
  state: 'England',
}, {
  name: 'Dharuhera',
  lat: 28.2055216,
  lon: 76.7953099,
  country: 'IN',
  state: 'Haryana',
}, {
  name: 'Managua',
  lat: 12.1544035,
  lon: -86.2737642,
  country: 'NI',
  state: 'Managua',
}, {
  name: 'Beijing',
  lat: 39.906217,
  lon: 116.3912757,
  country: 'CN',
  state: 'Beijing',
}, {
  name: 'Lahore',
  lat: 31.5656822,
  lon: 74.3141829,
  country: 'PK',
  state: 'Punjab',
},
];
const initialState = {
  airdata: [],
  cityOptions: [],
  cities: citiesData,
  isLoading: false,
  error: undefined,
  citOptIsLoad: false,
  addMessage: undefined,
};
export default initialState;
