import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIURL, getCoord } from '../api/url';

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
};

export const getData = createAsyncThunk('airqa/getData', async (array) => {
  const promises = array.map(async (ele) => {
    const url = APIURL(ele.lat, ele.lon);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const res = await response.json();
      const info = res.list[0].main;
      const comp = res.list[0].components;
      const send = {
        ...ele,
        ...info,
        comp,
      };
      return send;
    } catch (error) {
      return error;
    }
  });
  return Promise.all(promises);
});

export const getCityCoord = createAsyncThunk('airqa/getCityCoord', async (city) => {
  try {
    const response = await getCoord(city);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const res = await response.json();
    return res;
  } catch (error) {
    return error;
  }
});

const airqaSlice = createSlice({
  name: 'airqa',
  initialState,
  reducers: {
    addCity: (state, { payload }) => {
      state.cities.push(payload);
      console.log(payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.airdata = payload;
      })
      .addCase(getData.rejected, (state) => {
        state.error = true;
      })
      .addCase(getCityCoord.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCityCoord.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cityOptions = payload;
      })
      .addCase(getCityCoord.rejected, (state) => {
        state.error = true;
      });
  },
});
export const { addCity } = airqaSlice.actions;
export default airqaSlice.reducer;
