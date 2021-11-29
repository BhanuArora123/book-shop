import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name:"cart",
    initialState:{
        cart:[],
        totalCartItems:0
    },
    reducers:{
        addToCart(state,action){
            if(state.cart[action.payload.key]){
                state.cart[action.payload.key].qty += action.payload.qty;
            }
            else{
                state.cart[action.payload.key] = action.payload;
            }
            state.totalCartItems += action.payload.qty;
        },
        addOne(state,action){
            state.cart[action.payload].qty++;
        },
        removeOne(state,action){
            if(state.cart[action.payload].qty === 1){
                state.cart[action.payload] = undefined;
            }
            else{
                state.cart[action.payload].qty--;
            }
        }
    }
})
export default cartReducer;