import { useDispatch } from "react-redux";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState={
    teachersList:[],
}

export const createThunk=createAsyncThunk("Teachers Lists",(arg,thunkApi)=>{
        fetch("http://localhost:4500/teachers")
        .then(res=>res.json())
        .then(data=>thunkApi.dispatch(setInitialState(data)))
    // axios.get("http://localhost:4500/teachers")
    // .then(res=>thunkApi.dispatch(setInitialState(res)))
})

export const teacherSlicer=createSlice({
    name:"Teachers lists",
    initialState,
    reducers:{
        setInitialState:(state,action)=>{
            state.teachersList=action.payload;
        }
    }
})


export const {setInitialState}=teacherSlicer.actions;
export default teacherSlicer.reducer;