import React from 'react';
import CartItem from "./CartItem";

const CartList = (props) => {
    const {order = [] ,
        handleCartShow = Function.prototype,
        removeFromCart = Function.prototype,
        removeQuantity = Function.prototype,
        addQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return (
        <ul className="collection cart-list">
            <li className="collection-item active deep-purple darken 4">This is your cart</li>
            {
                order.length ? order.map(item =>(
                    <CartItem key={item.id} {...item} removeFromCart={removeFromCart} removeQuantity={removeQuantity} addQuantity={addQuantity}/>
                )) : <li className="collection-item" style={{color: "white"}}>Your cart is empty :(</li>
            }
            <li className="collection-item active deep-purple darken 4">total: {totalPrice}$</li>
            <i className="material-icons cart-close" onClick={handleCartShow}>close</i>
        </ul>
    );
};

export default CartList;