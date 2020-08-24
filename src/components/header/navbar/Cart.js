import React from 'react';
import { useSelector } from 'react-redux'


const Cart = () => {
    const mapState = (state) => {
        return {
            cart: state.cart,
        }
    }

    const { cart } = useSelector(mapState)

    const getItemsQuantity = () => {
        let cartItemsQuantity = 0
        cart.items && cart.items.map(item => {
            const quantity = item.quantity
            cartItemsQuantity = cartItemsQuantity + quantity
        }
        )
        return cartItemsQuantity
    }

    return (
        <a href="/cart/" className="cart">
            <i className="fas fa-shopping-cart" id="cart-icon">
                <span >{getItemsQuantity()}</span>
            </i>

        </a>
    );
}

export default Cart;