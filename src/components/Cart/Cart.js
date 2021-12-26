import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCartData, sendData } from "../../store/cart";
import { useDispatch } from "react-redux";

const Cart = props => {
    const dispatch = useDispatch();
    const CartData = useSelector(state => state.cart.cart);
    // console.log(CartData);
    useEffect(() => {
        dispatch(getCartData());
    },[dispatch])

    return (
        <section className={CartData.length > 0?classes["cartSection"]:classes["cartLengthZero"]}>
            <div className={ classes["cart"] }>
                { CartData.length > 0 && <h1 className={ classes["cartHead"] }>Your Shopping Cart</h1>}
                {
                    CartData.map((cartItem) => {
                        if(!cartItem){
                            return (
                                <></>
                            )
                        }
                        return (
                            <CartItem
                                name={ cartItem.name }
                                key={ cartItem.key }
                                desc={ cartItem.desc }
                                price={ cartItem.price }
                                qty={ cartItem.qty } 
                                id={cartItem.key}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Cart;