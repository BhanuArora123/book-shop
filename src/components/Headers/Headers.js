import { Fragment } from "react/cjs/react.production.min"
import BookList from "../BookList/BookList";
import NavBar from "./NavBar"

const Headers = props => {
    return (
        <Fragment>
            <NavBar></NavBar>
            <BookList></BookList>
        </Fragment>
    )
}

export default Headers;