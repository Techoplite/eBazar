import React, { Fragment } from 'react';

const Item = (props) => {
    return (
        <Fragment>
            <img src={process.env.PUBLIC_URL + `${props.image}`} alt="" />
            <div className="item-details">
                <div className="item-name">{props.name}</div>
                {props.discount === 0 ? <div className="item-price">£{props.price}</div> :
                    <Fragment>
                        <div className="item-discount">{props.discount}% Discount</div>
                        <div className="item-price">Was £{props.price}</div>
                        
                        <div className="item-price">Now £{((100 - props.discount) / 100 * props.price).toFixed(2)}
                        </div>
                    </Fragment>}
            </div>
        </Fragment>
    );
}

export default Item;