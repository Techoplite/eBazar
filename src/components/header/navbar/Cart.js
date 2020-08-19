import React from 'react';
import { useSelector } from 'react-redux'


const Cart = () => {
    const mapState = (state) => {
        return {
            cart: state.cart,
        }
    }

    const { cart } = useSelector(mapState)

    return (
        <a href="/cart/" className="cart">
            <i className="fas fa-shopping-cart" id="cart-icon">
                <span >{cart.items.length}</span>
            </i>

        </a>
    );
}

export default Cart;