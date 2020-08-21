import React from 'react';
import { useSelector } from 'react-redux'

const CartSummary = () => {
    const mapState = (state) => {
        return {
            cart: state.cart,
        }
    }

    const { cart } = useSelector(mapState)

    return (
        <div className="cart-summary">
            <p className="user-cart-name">{cart.user}'s cart</p>
            <ul>
                {cart.items.map(item => <li key={item.id}>{item.name} X {item.quantity}, Subtotal £{item.price * item.quantity}</li>)}

            </ul>
        </div>
    );
}

export default CartSummary;