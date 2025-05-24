import { createSlice } from "@reduxjs/toolkit";
const reducerSlice=createSlice({
    name:'data',
    initialState:{
        items:[]
    },
    reducers:{
        setData:(state,action)=>{
            state.items=action.payload
        }
    }
})
export const {setData}=reducerSlice.actions
export default reducerSlice.reducer