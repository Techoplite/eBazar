import React, { Fragment } from 'react';

const Item = (props) => {
    return (
        <Fragment>
            <img src={require("./laptop.jpg")} alt="" />
            <div className="item-details">
                <div className="item-name">{props.name}</div>
                <div className="item-price">£375.00</div>
            </div>
        </Fragment>
    );
}

export default Item;