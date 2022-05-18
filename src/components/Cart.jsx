import React from 'react';
import FortniteButton from "./FortniteButton";

function Cart(props) {
    const {handleCartShow = Function.prototype} = props;

    return (
        <div className={"cart"} onClick={handleCartShow}>
            <FortniteButton>
                <i className="material-icons">shopping_cart</i>
                <span className="cart-quantity">{props.quantiy}</span>
            </FortniteButton>

        </div>
    );
}

export default Cart;