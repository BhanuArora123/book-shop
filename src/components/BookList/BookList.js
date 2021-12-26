import BookItem from "./BookItem";
import classes from "./BookList.module.css";

const BookList = props => {
    const Books = [
        {
            name:"BS Grewal",
            desc:"a great book for jee advance aspirants ",
            price:430,
            key:0
        },
        {
            name : "Concepts of Physics by HC Verma",
            desc:"a very interesting and practical based book for physics",
            price:370,
            key:1
        }
    ]
    return (
        <section className={classes["bookList"]}>
            <h1 className={classes["bookListHead"]}>Buy Your Favourite Product</h1>
            {
                Books.map(book => {
                    return (
                        <BookItem 
                        name={book.name} 
                        desc={book.desc} 
                        price={book.price} 
                        key={book.key}
                        id={book.key} />
                    )
                })
            }
        </section>
    )
}
export default BookList;