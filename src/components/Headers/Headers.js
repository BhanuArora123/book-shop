import { useSelector } from "react-redux";
import { Fragment } from "react/cjs/react.production.min"
import BookList from "../BookList/BookList";
import Cart from "../Cart/Cart";
import NavBar from "./NavBar"
import Notification from "./Notification";

const Headers = props => {
    const displayNoti = useSelector(state => state.notification.displayNoti);
    const notificationData = useSelector(state => state.notification.data);
    return (
        <Fragment>
            { displayNoti && <Notification {...notificationData} /> }
            <NavBar></NavBar>
            <Cart></Cart>
            <BookList></BookList>
        </Fragment>
    )
}

export default Headers;