import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../Config/axios.auth";



const initialState = { loading: false, result: [], error: null, message:""};


export const getProductAPI = createAsyncThunk(
    'get-product',
     async(data, { rejectWithValue }) => {
        try {
           const response = await Axios.get(`/products`,data);
           return await response.data
        } catch (error) {
           return rejectWithValue(error.response.data);
        }
     }
);


const productSlice = createSlice({
    name: 'get-product',
    initialState,
    extraReducers: (builder) => {
        builder 
              .addCase(getProductAPI.pending, (state, action) => {
                state.loading = true
              })
              .addCase(getProductAPI.fulfilled, (state, action) => {
                state.loading = false
                state.result = action.payload
                state.message = action.payload?.message
              })
              .addCase(getProductAPI.rejected, (state, action) =>{
                state.loading = false
                state.error = action.payload?.error
                state.message = action.payload?.message
              })
    }
});


const productReducer = productSlice.reducer;


export default productReducer;