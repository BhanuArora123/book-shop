import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import classes from "./BookItem.module.css";
import { useDispatch } from 'react-redux';
import store, { cartActions } from '../../store/index';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import store1, { changeAction } from '../../store/changeCartStore';
import { createStoreHook } from 'react-redux';
import { createDispatchHook } from 'react-redux';
// import CartItem from '../Cart/CartItem';
const BookItem = props => {
    // const dispatch = useDispatch();
    const useStore1 = createStoreHook();
    const useStore2 = createStoreHook(store1);
    const dispatch = createDispatchHook(store);
    const dispatch1 = createDispatchHook(store1);
    let cart = useStore1();
    console.log(cart);
    let isCartChanged = useStore2();
    console.log(cart);
    let cartItem = {
        name:props.name,
        desc:props.desc,
        price:props.price,
        key:props.id,
        qty:1
      };
    useEffect(() => {
    async function addingToCart(){
        if(isCartChanged){
            dispatch1(changeAction.changeCartChanged());
            await fetch("http://localhost:8080/addToCart",{
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({ cartItem })
          });
        }
    };
    addingToCart();
  },[ cart ]);
    const addToCartHandler = () => {
        dispatch(cartActions.addToCart({
            name:props.name,
            desc:props.desc,
            price:props.price,
            key:props.id,
            qty:1
        }))
        dispatch1(changeAction.changeCartChanged());
    }
    return (
        <div className={classes["bookItem"]}>
            <div className={classes["bookPriceName"]}>
                <div className={classes["name"]}>{props.name}</div>
                <div className={classes["price"]}>{props.price}$</div>
            </div>
            <div className={classes["bookDesc"]}>{props.desc}</div>
            <div className={classes["addToCart"]}>
                <button className={classes["addToCartBtn"]} onClick={addToCartHandler}>
                    Add To Cart 
                    <FontAwesomeIcon icon={faCartPlus} />
                </button>
            </div>
        </div>
    )
}
export default BookItem;