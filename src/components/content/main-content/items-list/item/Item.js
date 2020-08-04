import React, { Fragment } from 'react';

const Item = (props) => {
    return (
        <Fragment>
            <img src={process.env.PUBLIC_URL + `${props.image}`} alt="" />
            <div className="item-details">
                <div className="item-name">{props.name}</div>
                <div className="weighted-avarage-rating">{props.rating} out of {props.totalFeedbacks} feedbacks</div>
                <div className="star-rating">
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


                </div>
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