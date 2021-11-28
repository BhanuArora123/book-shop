import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
const BookItem = props => {
    return (
        <div>
            <div>
                <div>{props.name}</div>
                <div>{props.price}$</div>
            </div>
            <div>{props.desc}</div>
            <div>
                <button>
                    Add To Cart 
                    <FontAwesomeIcon icon={faCartPlus} />
                </button>
            </div>
        </div>
    )
}
export default BookItem;