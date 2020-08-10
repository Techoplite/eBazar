import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

const Item = (props) => {
    const star1 = props.item.rating[1]
    const star2 = props.item.rating[2]
    const star3 = props.item.rating[3]
    const star4 = props.item.rating[4]
    const star5 = props.item.rating[5]
    const star1Percentage = star1 * 100 / props.totalFeedbacks
    const star2Percentage = star2 * 100 / props.totalFeedbacks
    const star3Percentage = star3 * 100 / props.totalFeedbacks
    const star4Percentage = star4 * 100 / props.totalFeedbacks
    const star5Percentage = star5 * 100 / props.totalFeedbacks



    return (
        <Fragment>
            <img src={process.env.PUBLIC_URL + `${props.image}`} alt="" />
            <div className="item-details">
                <div className="item-name">
                    <Link to={`/${props.item.id}`}>{props.name}</Link>
                </div>
                <div className="weighted-avarage-rating">{props.rating} out of {props.totalFeedbacks} feedbacks</div>
                <div className="star-rating tooltip">
                    {props.rating > 1 ? <span className="material-icons">
                        star
                            </span> : <span className="material-icons">
                            star_outline
                            </span>}
                    {props.rating > 2 ? <span className="material-icons">
                        star
                            </span> : <span className="material-icons">
                            star_outline
                            </span>}
                    {props.rating > 3 ? <span className="material-icons">
                        star
                            </span> : <span className="material-icons">
                            star_outline
                            </span>}
                    {props.rating > 4 ? <span className="material-icons">
                        star
                            </span> : <span className="material-icons">
                            star_outline
                            </span>}
                    {props.rating > 5 ? <span className="material-icons">
                        star
                            </span> : <span className="material-icons">
                            star_outline
                            </span>}
                    <span className="tooltip-content">
                        <label htmlFor="5-star" className="progress-bar-label">5 star
                        </label>
                        <div className="progress" id="5-star">
                            <div
                                className="progress-bar"
                                style={{ width: `${star5Percentage}%` }}>
                            </div>
                        </div>
                        <div className="star-percentage">{star5Percentage.toFixed(0)}%
                        </div>
                        <label htmlFor="4-star" className="progress-bar-label">4 star
                        </label>
                        <div className="progress" id="4-star">
                            <div
                                className="progress-bar"
                                style={{ width: `${star4Percentage}%` }}>
                            </div>
                        </div>
                        <div className="star-percentage">{star4Percentage.toFixed(0)}%
                        </div>
                        <label htmlFor="3-star" className="progress-bar-label">3 star
                        </label>
                        <div className="progress" id="3-star">
                            <div
                                className="progress-bar"
                                style={{ width: `${star3Percentage}%` }}>
                            </div>
                        </div>
                        <div className="star-percentage">{star3Percentage.toFixed(0)}%
                        </div>
                        <label htmlFor="2-star" className="progress-bar-label">2 star
                        </label>
                        <div className="progress" id="2-star">
                            <div
                                className="progress-bar"
                                style={{ width: `${star2Percentage}%` }}>
                            </div>
                        </div>
                        <div className="star-percentage">{star2Percentage.toFixed(0)}%
                        </div>
                        <label htmlFor="1-star" className="progress-bar-label">1 star
                        </label>
                        <div className="progress" id="1-star">
                            <div
                                className="progress-bar"
                                style={{ width: `${star1Percentage}%` }}>
                            </div>
                        </div>
                        <div className="star-percentage">{star1Percentage.toFixed(0)}%
                        </div>
                    </span>
                </div>
                {props.left < 6 && <div className="items-left">Only {props.left} items left!</div>}
                {props.discount === 0 ? <div className="item-price">£{props.price}</div> :
                    <Fragment>
                        <div className="item-discount">{props.discount}% Discount</div>
                        <div className="item-was-price">Was £{props.price}</div>

                        <div className="item-price">Now £{((100 - props.discount) / 100 * props.price).toFixed(2)}
                        </div>
                    </Fragment>}
            </div>
        </Fragment>
    );
}

export default Item;