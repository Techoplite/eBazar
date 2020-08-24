import React from 'react';
import { useSelector } from 'react-redux'

const CartSummary = () => {
    const mapState = (state) => {
        return {
            cart: state.cart,
        }
    }

    const { cart } = useSelector(mapState)

    const getSubtotal = (item) => {
        const subtotal = ((100 - item.discount) / 100 * item.price).toFixed(2) * item.quantity 
        return subtotal
    }

    const getTotal = (cartItems) => {
        const subtotals = []
        cartItems.map(item => {
            const subtotal = ((100 - item.discount) / 100 * item.price).toFixed(2) * item.quantity 
            subtotals.push(subtotal)
        })
        const total = subtotals.reduce((a, b) => a + b, 0)
        return total.toFixed(2)
    }

    return (
        <div className="cart-summary">
            <p className="user-cart-name">{cart.user}'s cart</p>
            {!cart.items.length && <p className="empty-cart">Your cart is empty</p>}
            <ul>
                {cart.items.map(item => <div key={item.id} className="cart-item">
                    <li className="name-and-quantity">{item.quantity} x {item.name}
                    </li>
                    <li className= "subtotal" > Subtotal: <br/>£{getSubtotal(item)}
                    </li>
        </div>)
}

            </ul >
    <p className="total">Total: £{getTotal(cart.items)}</p>
        </div >
    );
}

export default CartSummary;