import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../../../../actions'

const ItemDetail = (props) => {
    const mapState = (state) => {
        return {
            currentItem: state.currentItem,
            cart: state.cart
        }
    }

    const dispatch = useDispatch()
    const { currentItem, cart } = useSelector(mapState)



    useEffect(() => {
        let { id } = props.match.params
        dispatch(actions.fetchCurrentItem(id, cart))
        dispatch(actions.setAside(false))
        return () => dispatch(actions.setAside(true))
    }, [dispatch, props.match.params])

    const avarageRating =
        currentItem !== null &&
        ((currentItem.rating[1] + 2 * currentItem.rating[2] + 3 * currentItem.rating[3] + 4 * currentItem.rating[4] + 5 * currentItem.rating[5]) / (currentItem.rating[1] + currentItem.rating[2] + currentItem.rating[3] + currentItem.rating[4] + currentItem.rating[5])).toFixed(1)


    const totalFeedbacks =
        currentItem !== null &&
        (currentItem.rating[1] + currentItem.rating[2] + currentItem.rating[3] + currentItem.rating[4] + currentItem.rating[5])

    const star1Percentage =
        currentItem !== null &&
        currentItem.rating[1] * 100 / totalFeedbacks
    const star2Percentage =
        currentItem !== null &&
        currentItem.rating[2] * 100 / totalFeedbacks
    const star3Percentage =
        currentItem !== null &&
        currentItem.rating[3] * 100 / totalFeedbacks
    const star4Percentage =
        currentItem !== null &&
        currentItem.rating[4] * 100 / totalFeedbacks
    const star5Percentage =
        currentItem !== null &&
        currentItem.rating[5] * 100 / totalFeedbacks

    const getQuantity = currentItem => {
        const itemToCount = cart.items.find(item =>
            item.id === currentItem.id)
        const quantity = itemToCount && itemToCount.quantity
        return quantity
    }

    const getWidth = () => {
        return (getQuantity(currentItem) < 1 || isNaN(getQuantity(currentItem))) ? "full-width" : ""
    }

    return (
        currentItem !== null &&
        <div className="single-item-details">
            <div className="picture">
                <img id="detail-img" src={process.env.PUBLIC_URL + `${currentItem.image}`} alt="" />
                <div className="order">
                    {
                        getQuantity(currentItem) > 0 &&
                        <Fragment>
                            <button className="decrease" onClick={() => getQuantity(currentItem) === 1 ? dispatch(actions.removeItem(currentItem)) : dispatch(actions.decreaseQuantity(currentItem))}>-
                            </button>
                            <div className="quantity">
                                {getQuantity(currentItem)}
                            </div>
                        </Fragment>
                    }
                    <button className={`add-to-cart ${getWidth()}`} onClick={() => dispatch(actions.increaseQuantity(currentItem))}>Add to cart
                    </button>
                    {
                        getQuantity(currentItem) > 0 &&
                        <button className="remove-item" onClick={() => dispatch(actions.removeItem(currentItem))}>Remove item
                    </button>
                    }
                    <button className={`buy-now ${getWidth()}`}>Buy now</button>
                </div>

            </div>
            <div className="item-data">
                <br />
                <div className="detail-item-name">
                    {currentItem.name}
                </div>
                <br />
                <div className="discount-and-stock">
                    {currentItem.left < 6 && <div className="items-left">Only {currentItem.left} items left!</div>}
                    {currentItem.discount === 0 ? <div className="item-price">£{currentItem.price}</div> :
                        <Fragment>
                            <div className="item-discount">{currentItem.discount}% Discount</div>
                            <div className="item-was-price">Was £{currentItem.price}</div>

                            <div className="item-price">Now £{((100 - currentItem.discount) / 100 * currentItem.price).toFixed(2)}
                            </div>
                        </Fragment>}
                </div>
                <div className="weighted-avarage-rating">{avarageRating} out of {totalFeedbacks} feedbacks</div>
                <div className="star-rating tooltip">
                    {avarageRating > 1 ? <span className="material-icons">
                        star
                            </span> : <span className="material-icons">
                            star_outline
                            </span>}
                    {avarageRating > 2 ? <span className="material-icons">
                        star
                            </span> : <span className="material-icons">
                            star_outline
                            </span>}
                    {avarageRating > 3 ? <span className="material-icons">
                        star
                            </span> : <span className="material-icons">
                            star_outline
                            </span>}
                    {avarageRating > 4 ? <span className="material-icons">
                        star
                            </span> : <span className="material-icons">
                            star_outline
                            </span>}
                    {avarageRating > 5 ? <span className="material-icons">
                        star
                            </span> : <span className="material-icons">
                            star_outline
                            </span>}
                </div >
                <div className="feedback-row">
                    <label htmlFor="5-star" className="progress-bar-label  feedback-progress-bar">5 star
                        </label>
                    <div className="feedback-progress" id="5-star">
                        <div
                            className="progress-bar"
                            style={{ width: `${star5Percentage}%` }}>
                        </div>
                    </div>
                    <div className="feedback-star-percentage">{star5Percentage.toFixed(0)}%
                        </div>
                </div>
                <div className="feedback-row">
                    <label htmlFor="4-star" className="progress-bar-label  feedback-progress-bar">4 star
                        </label>
                    <div className="feedback-progress" id="4-star">
                        <div
                            className="progress-bar"
                            style={{ width: `${star4Percentage}%` }}>
                        </div>
                    </div>
                    <div className="feedback-star-percentage">{star4Percentage.toFixed(0)}%
                        </div>
                </div>
                <div className="feedback-row">
                    <label htmlFor="3-star" className="progress-bar-label  feedback-progress-bar">3 star
                        </label>
                    <div className="feedback-progress" id="3-star">
                        <div
                            className="progress-bar"
                            style={{ width: `${star3Percentage}%` }}>
                        </div>
                    </div>
                    <div className="feedback-star-percentage">{star3Percentage.toFixed(0)}%
                        </div>
                </div>
                <div className="feedback-row">
                    <label htmlFor="2-star" className="progress-bar-label  feedback-progress-bar">2 star
                        </label>
                    <div className="feedback-progress" id="2-star">
                        <div
                            className="progress-bar"
                            style={{ width: `${star2Percentage}%` }}>
                        </div>
                    </div>
                    <div className="feedback-star-percentage">{star2Percentage.toFixed(0)}%
                        </div>
                </div>
                <div className="feedback-row">
                    <label htmlFor="1-star" className="progress-bar-label  feedback-progress-bar">1 star
                        </label>
                    <div className="feedback-progress" id="1-star">
                        <div
                            className="progress-bar"
                            style={{ width: `${star1Percentage}%` }}>
                        </div>
                    </div>
                    <div className="feedback-star-percentage">{star1Percentage.toFixed(0)}%
                        </div>
                </div>
                <div>
                    <br />
                    Features
                    <ul>
                        {currentItem.features.map(feature => <li key={feature}>{feature}</li>)}
                    </ul>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;