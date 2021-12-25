import { configureStore } from "@reduxjs/toolkit";
import cartChanged from "./isCartChanged";

const store1 = configureStore({
    reducer : {
        cartChanged : cartChanged.reducer
    }
})

export const changeAction = cartChanged.actions;
export default store1;