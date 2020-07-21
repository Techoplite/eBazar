import React from 'react';

const Cart = (props) => {
    return (
        <a href="/cart/" className="cart">
            <i className="fas fa-shopping-cart" id="cart-icon"></i>
            <span >4</span>
        </a>
    );
}

export default Cart;