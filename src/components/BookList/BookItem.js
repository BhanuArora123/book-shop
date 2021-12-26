import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import classes from "./BookItem.module.css";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/index';
// import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import { notificationActions } from '../../store/index';
// import CartItem from '../Cart/CartItem';
import { sendData } from '../../store/cart';
const BookItem = props => {
    const [isCartChanged, setCartChanged] = useState(false);
    const dispatch = useDispatch();
    let cartItem = {
        name: props.name,
        desc: props.desc,
        price: props.price,
        key: props.id,
        qty: 1
    };
    // let cart = useSelector(state => state.cart.cart);
    useEffect(() => {
        if (isCartChanged) {
            setCartChanged(false);
            dispatch(sendData(cartItem));
        }
    }, [isCartChanged]);
    const addToCartHandler = () => {
        setCartChanged(true);
    }
    return (
        <div className={ classes["bookItem"] }>
            <div className={ classes["bookPriceName"] }>
                <div className={ classes["name"] }>{ props.name }</div>
                <div className={ classes["price"] }>{ props.price }$</div>
            </div>
            <div className={ classes["bookDesc"] }>{ props.desc }</div>
            <div className={ classes["addToCart"] }>
                <button className={ classes["addToCartBtn"] } onClick={ addToCartHandler }>
                    Add To Cart
                    <FontAwesomeIcon icon={ faCartPlus } />
                </button>
            </div>
        </div>
    )
}
export default BookItem;