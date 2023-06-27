import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIURL } from "../api/url";
export const getData = createAsyncThunk('airqa/getData', () => {
    initialState.cities.forEach((ele) => {
        const url = APIURL(ele.lat, ele.lon);
        return fetch(url)
            .then((resp) => resp.json())
            .catch((error) => console.log(error));
    })
})

const initialState = {
    airdata: [],
    cities: [],
    isLoading: [],
    error: undefined,
}

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
                state.airdata.push(payload);
            })
            .addCase(getData.rejected, (state) => {
                state.error = true;
            })
    }
});

export default airqaSlice.reducer;