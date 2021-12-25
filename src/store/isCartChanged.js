import { createSlice } from "@reduxjs/toolkit";

const cartChanged = createSlice({
    name : "cartChanged",
    initialState : {
        isCartChanged : false
    },
    reducers : {
        changeCartChanged(state){
            state.isCartChanged = !(state.isCartChanged);
        }
    }
})

export default cartChanged;