import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <a href="/cart/" id="cart">
                <i className="fas fa-shopping-cart" id="cart-icon"></i>
                <span className="cart-items">4</span>
            </a>
        </div>
    );
}

export default Cart;