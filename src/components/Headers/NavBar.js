import CartBox from "../Cart/CartBox";
import classes from "./NavBar.module.css";
const NavBar = props => {
    return (
        <nav className={classes["navbar"]}>
            <div className={classes["subNav"]}>
                <h1>Redux Cart</h1>
            </div>
            <div className={classes["subNav"]}>
                <CartBox></CartBox>
            </div>
        </nav>
    )
}
export default NavBar;