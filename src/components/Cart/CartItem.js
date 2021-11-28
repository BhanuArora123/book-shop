import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
const CartItem = props => {
    return (
        <div>
            <div>
                <div>{ props.name }</div>
                <div>
                    <span>{ props.price * props.qty }$</span>
                    <span>{ props.price }$/item</span>
                </div>
            </div>
            <div>
                <div>x{ props.qty }</div>
                <div>
                    <FontAwesomeIcon
                        icon={ faPlus }>

                    </FontAwesomeIcon>
                    <FontAwesomeIcon
                        icon={ faMinus }>

                    </FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
}
export default CartItem;