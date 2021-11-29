import classes from "./CartBox.module.css";
import { useSelector } from "react-redux";
const CartBox = props => {
    const totalCartItems = useSelector(state => state.cart.totalCartItems);
    return (
        <div className={classes["cartBox"]}>
            <div className={classes["cartBoxHead"]}>Cart</div>
            <div className={classes["cartBoxCount"]}>{totalCartItems}</div>
        </div>
    )
}

export default CartBox;