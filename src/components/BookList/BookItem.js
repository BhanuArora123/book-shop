import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import classes from "./BookItem.module.css";
const BookItem = props => {
    return (
        <div className={classes["bookItem"]}>
            <div className={classes["bookPriceName"]}>
                <div className={classes["name"]}>{props.name}</div>
                <div className={classes["price"]}>{props.price}$</div>
            </div>
            <div className={classes["bookDesc"]}>{props.desc}</div>
            <div className={classes["addToCart"]}>
                <button className={classes["addToCartBtn"]}>
                    Add To Cart 
                    <FontAwesomeIcon icon={faCartPlus} />
                </button>
            </div>
        </div>
    )
}
export default BookItem;