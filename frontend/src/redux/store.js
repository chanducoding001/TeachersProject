import {configureStore} from "@reduxjs/toolkit";
import registerReducer from "./slicer";
import  teacherSlicerReducer  from "./dbSlicer";
const store=configureStore({
    reducer:{registerReducer,teacherSlicerReducer}
})

export default store;