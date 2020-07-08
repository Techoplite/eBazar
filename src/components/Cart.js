import React from 'react';

const Cart = (props) => {
    return (
        <div className={`col-1 col-s-1 col-xs-12 ${props.toggle}`} id="cart">
            <a href="/cart/">
                <i className="fas fa-shopping-cart"></i>
            </a>
        </div>
    );
}

export default Cart;