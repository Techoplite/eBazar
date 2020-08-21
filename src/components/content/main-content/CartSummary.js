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
            <ul>
                {cart.items.map(item => <li key={item.id}>{item.name} X {item.quantity}</li>)}

            </ul>
        </div>
    );
}

export default CartSummary;