import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import notificationReducer from "./noti";
const store = configureStore({
    reducer:{
        cart:cartReducer.reducer,
        notification : notificationReducer.reducer
    }
})
export const notificationActions = notificationReducer.actions;
export const cartActions = cartReducer.actions;
export default store;