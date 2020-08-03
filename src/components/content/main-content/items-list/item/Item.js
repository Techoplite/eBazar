import React, { Fragment } from 'react';

const Item = (props) => {
    return (
        <Fragment>
            <img src={process.env.PUBLIC_URL + `${props.image}`} alt="" />
            <div className="item-details">
                <div className="item-name">{props.name}</div>
                <div className="item-price">£{props.price}</div>
            </div>
        </Fragment>
    );
}

export default Item;