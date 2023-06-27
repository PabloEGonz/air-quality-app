import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { APIURL } from '../api/url';

const initialState = {
  airdata: [],
  cities: [{
    lat: 48.8588897,
    lon: 2.3200410217200766,
    country: 'FR',
    state: 'Ile-de-France',
  }, {
    lat: 40.7127281,
    lon: -74.0060152,
    country: 'US',
    state: 'New York',
  },
  ],
  isLoading: false,
  error: undefined,
};

export const getData = createAsyncThunk('airqa/getData', async () => {
  const promises = initialState.cities.map(async (ele) => {
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
        // console.log(payload);
        state.airdata = payload;
      })
      .addCase(getData.rejected, (state) => {
        state.error = true;
      });
  },
});

export default airqaSlice.reducer;
