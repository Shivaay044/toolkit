import { configureStore } from "@reduxjs/toolkit";

import { thunk } from "redux-thunk";
import { rootReducer } from "./combineReducer";
import logger from "redux-logger";








export const store = configureStore({
    reducer: rootReducer,
    middleware: ()=>[thunk,logger]
})