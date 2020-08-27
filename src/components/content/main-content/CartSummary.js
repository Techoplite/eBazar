import React from 'react';
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'


const CartSummary = () => {
    const mapState = (state) => {
        return {
            cart: state.cart,
            aside: state.aside
        }
    }

    const { cart, aside } = useSelector(mapState)

    const getSubtotal = (item) => {
        const subtotal = ((100 - item.discount) / 100 * item.price).toFixed(2) * item.quantity
        return subtotal.toFixed(2)
    }

    const getTotal = (cartItems) => {
        const subtotals = []
        cartItems.map(item => {
            const subtotal = ((100 - item.discount) / 100 * item.price) * item.quantity
            subtotals.push(subtotal.toFixed(2))
        })
        let total = subtotals.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
        total = parseFloat(total).toFixed(2)
        return total
    }

    const getAside = () => {
        return aside ? "with-aside" : ""
    }

    return (
        <div className={`cart-summary ${getAside()}`}>
            <p className="user-cart-name">{cart.user}'s cart</p>
            {!cart.items.length && <p className="empty-cart">Your cart is empty</p>}
            <ul>
                {cart.items.map(item => <div key={item.id} className="cart-item">
                    <li className="name-and-quantity">{item.quantity} x {item.name}
                    </li>
                    <li className="subtotal" > Subtotal: <br />£{getSubtotal(item)}
                    </li>
                </div>)
                }

            </ul>
            <p className="total">Total: £{getTotal(cart.items)}</p>
            <div className="stripe-checkout">
                <StripeCheckout
                    stripeKey="pk_test_51HKmuGJwupY92GFQfKJO9Bch0fbTBygcWgQ3IRWCGWRsqUWviryNYkjLmNwIz6VzDypvOWqwZd4Hz4ajCQuROPMK00JLVcKYUT"
                />
            </div>
        </div >
    );
}

export default CartSummary;