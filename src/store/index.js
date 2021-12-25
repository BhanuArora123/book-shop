import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
// import cartChanged from "./isCartChanged";

const store = configureStore({
    reducer:{
        cart:cartReducer.reducer
    }
})
export const cartActions = cartReducer.actions;
export default store;