import { configureStore } from "@reduxjs/toolkit";
import reducerSlice from "./Reducer";
export default configureStore({
    reducer:{
        data:reducerSlice
    }
})