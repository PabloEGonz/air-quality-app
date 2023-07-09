import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIURL, getCoord } from '../api/url';
import initialState from './inicialState';

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
      state.addMessage = 'City successfully added!';
      state.cityOptions = [];
    },
    removeCity: (state, { payload }) => {
      state.cities = state.cities.filter((city) => city.name !== payload);
    },
    clearMesg: (state) => {
      state.addMessage = undefined;
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
        state.citOptIsLoad = true;
      })
      .addCase(getCityCoord.fulfilled, (state, { payload }) => {
        state.citOptIsLoad = false;
        if (payload.length > 0) state.cityOptions = payload;
        else {
          state.addMessage = 'No cities found. Please try a different name.';
          state.cityOptions = [];
        }
      })
      .addCase(getCityCoord.rejected, (state) => {
        state.error = true;
      });
  },
});
export const { addCity, removeCity, clearMesg } = airqaSlice.actions;
export default airqaSlice.reducer;
