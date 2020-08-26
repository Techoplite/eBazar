import React from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'



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
        <NavLink to="/checkout/" className="cart">
            <i className="fas fa-shopping-cart" id="cart-icon">
                <span >{getItemsQuantity()}</span>
            </i>

        </NavLink>
    );
}

export default Cart;