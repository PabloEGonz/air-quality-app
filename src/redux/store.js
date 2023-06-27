import { configureStore } from '@reduxjs/toolkit';
import airqaReducer from './airqaSlice';

const store = configureStore({
  reducer: {
    airqa: airqaReducer,
  },
});
export default store;
