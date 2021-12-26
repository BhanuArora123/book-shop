import { createSlice } from "@reduxjs/toolkit";
import { cartActions, notificationActions } from "./index";

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
            state.totalCartItems++;
        },
        removeOne(state,action){
            if(state.cart[action.payload].qty === 1){
                state.cart[action.payload] = undefined;
            }
            else{
                state.cart[action.payload].qty--;
            }
            state.totalCartItems--;
        },
        replaceCart(state,action){
            state.cart = action.payload.cart;
            // console.log(action.payload.total);
            state.totalCartItems = action.payload.total;
        }
    }
})

export const sendData = (cartItem) => {
    return async (dispatch) => {
            dispatch(notificationActions.showNoti(true));
            dispatch(notificationActions.addNotificationData({
                    status : "Pending",
                    message : "Loading...",
                    styleName : "pending"
                }));
            fetch("http://localhost:8080/addToCart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({cartItem})
            })
            .then((res) => {
                if(!res.ok){
                    throw new Error("failed!")
                }
                dispatch(cartActions.addToCart(cartItem));
                dispatch(notificationActions.showNoti(true));
                dispatch(notificationActions.addNotificationData({
                    status : "Success",
                    message : "Cart Saved Successfully",
                    styleName : "success"
                }));
                setTimeout(() => {
                    dispatch(notificationActions.showNoti(false));
                } , 2000)
            })
            .catch((err) => {
                dispatch(notificationActions.showNoti(true));
                dispatch(notificationActions.addNotificationData({
                    status : "Error",
                    message : err.message,
                    styleName : "error"
                }));
                setTimeout(() => {
                    dispatch(notificationActions.showNoti(false));
                } , 2000)
            })
    }
}
export const getCartData = () => {
    return async (dispatch) => {
        dispatch(notificationActions.showNoti(true));
            dispatch(notificationActions.addNotificationData({
                    status : "Pending",
                    message : "Loading...",
                    styleName : "pending"
                }));
            fetch("http://localhost:8080/getCart")
            .then((res) => {
                if(!res.ok){
                    throw new Error("failed!")
                }
                dispatch(notificationActions.showNoti(true));
                dispatch(notificationActions.addNotificationData({
                    status : "Success",
                    message : "Cart Saved Successfully",
                    styleName : "success"
                }));
                setTimeout(() => {
                    dispatch(notificationActions.showNoti(false));
                } , 2000)
                return res.json();
            })
            .then((cart) => {
                dispatch(cartActions.replaceCart(cart));
            })
            .catch((err) => {
                dispatch(notificationActions.showNoti(true));
                dispatch(notificationActions.addNotificationData({
                    status : "Error",
                    message : err.message,
                    styleName : "error"
                }));
                setTimeout(() => {
                    dispatch(notificationActions.showNoti(false));
                } , 2000)
            })
    }
}
export const removeData = (key) => {
    return async (dispatch) => {
            dispatch(notificationActions.showNoti(true));
            dispatch(notificationActions.addNotificationData({
                    status : "Pending",
                    message : "Loading...",
                    styleName : "pending"
                }));
            fetch("http://localhost:8080/removeFromCart", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({key})
            })
            .then((res) => {
                if(!res.ok){
                    throw new Error("failed!")
                }
                dispatch(cartActions.removeOne(key));
                dispatch(notificationActions.showNoti(true));
                dispatch(notificationActions.addNotificationData({
                    status : "Success",
                    message : "Item removed successfully",
                    styleName : "success"
                }));
                setTimeout(() => {
                    dispatch(notificationActions.showNoti(false));
                } , 2000)
            })
            .catch((err) => {
                dispatch(notificationActions.showNoti(true));
                dispatch(notificationActions.addNotificationData({
                    status : "Error",
                    message : err.message,
                    styleName : "error"
                }));
                setTimeout(() => {
                    dispatch(notificationActions.showNoti(false));
                } , 2000)
            })
    }
}
export default cartReducer;