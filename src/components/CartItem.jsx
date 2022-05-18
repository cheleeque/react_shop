import React from 'react';

const CartItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
        removeFromCart = Function.prototype,
        removeQuantity = Function.prototype,
        addQuantity = Function.prototype,
    } = props;

    return (
        <a href="#" className="collection-item white-text">
            {name}
            <i className="material-icons cart-delete red-white unselectable" onClick={() => removeQuantity(id)}>remove</i>
            {quantity}
            <i className="material-icons cart-delete red-white unselectable" onClick={() => addQuantity(id)}>add</i>
            = {price*quantity}$
            <span className="secondary-content" onClick={() => removeFromCart(id)}>
                <i className="material-icons cart-delete red-text unselectable">remove_shopping_cart</i>
            </span>
        </a>

        // <a href="#" className="collection-item cart-item white-text">
        //     <p>{name}</p>
        //     <i className="material-icons cart-delete red-white unselectable" onClick={() => removeQuantity(id)}>remove</i>
        //     <p>{quantity}</p>
        //     <i className="material-icons cart-delete red-white unselectable" onClick={() => addQuantity(id)}>add</i>
        //     <p>= {price*quantity}$</p>
        //     <span className="secondary-content" onClick={() => removeFromCart(id)}>
        //         <i className="material-icons cart-delete red-text unselectable">remove_shopping_cart</i>
        //     </span>
        // </a>
    );
};

export default CartItem;