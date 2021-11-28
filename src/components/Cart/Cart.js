import CartItem from "./CartItem";

const Cart = props => {
    const CartData = [
        {
            name:"BS Grewal",
            desc:"a great book for jee advance aspirants ",
            price:430,
            key:0,
            qty:1
        },
        {
            name : "Concepts of Physics by HC Verma",
            desc:"a very interesting and practical based book for physics",
            price:370,
            key:1,
            qty:2
        }
    ]
    return (
        <div>
            <h1>Your Shopping Cart</h1>
            {
                CartData.map((cartItem) => {
                    return (
                        <CartItem 
                        name={cartItem.name} 
                        key={cartItem.key}
                        desc={cartItem.desc}
                        price={cartItem.price}
                        qty={cartItem.qty}/>
                    )
                })
            }
        </div>
    )
}

export default Cart;