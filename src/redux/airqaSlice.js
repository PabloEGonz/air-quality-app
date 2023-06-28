import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { APIURL } from '../api/url';

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
},
];
const initialState = {
  airdata: JSON.parse(localStorage.getItem('airdataAPI')) || [],
  cities: citiesData,
  isLoading: false,
  error: undefined,
};

export const getData = createAsyncThunk('airqa/getData', async (array) => {
  const promises = array.map(async (ele) => {
    const url = APIURL(ele.lat, ele.lon);
    try {
      const resp = await axios(url);
      const res = resp.data;
      const info = res.list[0].main;
      const send = {
        ...ele,
        ...info,
      };
      return send;
    } catch (error) {
      return error;
    }
  });
  return Promise.all(promises);
});

const airqaSlice = createSlice({
  name: 'airqa',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.airdata = payload;
        localStorage.setItem('airdataAPI', JSON.stringify(state.airdata));
      })
      .addCase(getData.rejected, (state) => {
        state.error = true;
      });
  },
});

export default airqaSlice.reducer;
