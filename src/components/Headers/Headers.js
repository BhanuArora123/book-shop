import { Fragment } from "react/cjs/react.production.min"
import BookList from "../BookList/BookList";
import Cart from "../Cart/Cart";
import NavBar from "./NavBar"

const Headers = props => {
    return (
        <Fragment>
            <NavBar></NavBar>
            <Cart></Cart>
            <BookList></BookList>
        </Fragment>
    )
}

export default Headers;