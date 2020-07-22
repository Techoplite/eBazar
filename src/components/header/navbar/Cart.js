import React from 'react';

const Cart = (props) => {
    return (
        <a href="/cart/" className="cart">
            <i className="fas fa-shopping-cart" id="cart-icon">
                <span >4</span>
            </i>
            
        </a>
    );
}

export default Cart;