import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./Product/getProduct";





export const rootReducer = combineReducers({
    getProducts : productReducer
})