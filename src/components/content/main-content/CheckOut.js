import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../../actions'



const CheckOut = () => {

    const mapState = (state) => {
        return {
            cart: state.cart
        }
    }

    const dispatch = useDispatch()
    const { cart } = useSelector(mapState)


    return (
        <ul className="items-list">
            {cart.items.map(item => {
                return (
                    <li
                        className="checkout-item"
                        key={item.name}
                    >
                        <img src={process.env.PUBLIC_URL + `${item.image}`} alt="" />
                        <div className="item-details">
                            <div className="item-name">
                                {item.name}
                            </div>
                            {item.left < 6 && <div className="items-left">Only {item.left} items left!</div>}
                            {item.discount === 0 ? <div className="item-price">£{item.price}</div> :
                                <Fragment>
                                    <div className="item-discount">{item.discount}% Discount</div>
                                    <div className="item-was-price">Was £{item.price}</div>

                                    <div className="item-price">Now £{((100 - item.discount) / 100 * item.price).toFixed(2)}
                                    </div>
                                </Fragment>}
                        </div>
                        <div className="order">
                            {
                                item.quantity > 0 &&
                                <Fragment>
                                    <button className="checkout-decrease" onClick={() => item.quantity === 1 ? dispatch(actions.removeItem(item)) : dispatch(actions.decreaseQuantity(item))}>-
                            </button>
                                    <div className="checkout-quantity">
                                        {item.quantity}
                                    </div>
                                </Fragment>
                            }
                            <button className="checkout-add-to-cart" onClick={() => dispatch(actions.increaseQuantity(item))}>+
                    </button>
                            {
                                item.quantity > 0 &&
                                <button className="checkout-remove-item" onClick={() => dispatch(actions.removeItem(item))}>Remove item
                    </button>
                            }
                        </div>
                    </li>
                )
            }
            )}
        </ul>
    );
}

export default CheckOut;