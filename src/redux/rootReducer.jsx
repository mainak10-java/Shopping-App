import { combineReducers } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CounterSlice from "./slices/CounterSlice";



const rootReducer = combineReducers({
    cart : CartSlice,
    counter : CounterSlice,
});

export default rootReducer;