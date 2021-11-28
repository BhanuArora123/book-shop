import classes from "./CartBox.module.css";
const CartBox = props => {
    return (
        <div className={classes["cartBox"]}>
            <div className={classes["cartBoxHead"]}>Cart</div>
            <div className={classes["cartBoxCount"]}>0</div>
        </div>
    )
}

export default CartBox;