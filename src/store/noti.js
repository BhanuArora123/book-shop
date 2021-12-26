import { createSlice } from "@reduxjs/toolkit";

const notificationReducer = createSlice({
    name : "notification",
    initialState : {
        displayNoti : false,
        data : {}
    },
    reducers : {
        showNoti(state, action){
            state.displayNoti = action.payload;
        },
        addNotificationData(state, action){
            state.data = action.payload;
        }
    }
});
export default notificationReducer;