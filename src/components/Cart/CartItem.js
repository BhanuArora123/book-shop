import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import classes from "./CartItem.module.css";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';
import { removeData, sendData } from '../../store/cart';
import { useEffect, useState } from 'react';
const CartItem = props => {
    const [isCartChanged, setCartChanged] = useState(false);
    const [remove, setRemoveCart] = useState(false);
    const dispatch = useDispatch();
    let cartItem = {
        name: props.name,
        desc: props.desc,
        price: props.price,
        key: props.id,
        qty: 1
    };

    useEffect(() => {
        if (isCartChanged) {
            setCartChanged(false);
            dispatch(sendData(cartItem));
        }
    }, [isCartChanged,dispatch]);

    useEffect(() => {
        if (remove) {
            setRemoveCart(false);
            dispatch(removeData(props.id));
        }
    }, [remove,dispatch]);
    const addOneToCart = () => {
        setCartChanged(true);
    }
    const removeOneToCart = () => {
        setRemoveCart(true);
    }
    return (
        <div className={classes["cartItem"]}>
            <div className={classes["subCartItem"]}>
                <div className={classes["name"]}>{ props.name }</div>
                <div className={classes["price"]}>
                    <div>${ props.price * props.qty }</div>
                    <div>(${ props.price }/item)</div>
                </div>
            </div>
            <div className={classes["subCartItem"]}>
                <div className={classes["qty"]}>x { props.qty }</div>
                <div className={classes["addRemoveBtn"]}>
                    <FontAwesomeIcon
                        icon={ faPlus }
                        style={{
                            backgroundColor : "rgb(77,77,77)",
                            border:"8px solid rgb(77,77,77)",
                            margin:"5px",
                            marginLeft:"10px",
                            marginRight:"10px"
                        }}
                        size="1x"
                        onClick={addOneToCart}>
                    </FontAwesomeIcon>
                    <FontAwesomeIcon
                        icon={ faMinus }
                        style={{
                            backgroundColor : "rgb(77,77,77)",
                            border:"8px solid rgb(77,77,77)",
                            margin:"5px",
                            marginLeft:"10px",
                            marginRight:"10px"
                        }}
                        size="1x"
                        onClick={removeOneToCart}>
                        
                    </FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
}
export default CartItem;