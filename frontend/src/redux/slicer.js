import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Postform:{
        firstName: "",
    lastName: '',
    email: "",
    qualification: '',
    subjects: '',
    classes: '',
    section: '',
    phone: null,
    secondPhone: null,
    gender: '',
    address: ''
    }
}



export const postCredentials=createSlice({
    name:"post form",
    initialState,
    reducers:{
        register:(state,action)=>{
            return {
                ...state,Postform:action.payload
            }
        }
    }
})


export const {register} =postCredentials.actions;
export default postCredentials.reducer;