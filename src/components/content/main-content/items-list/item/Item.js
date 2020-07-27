import React from 'react';

const Item = (props) => {
    return (
        <div className="item">
            <img src={require("./laptop.jpg")} alt="" />
            <div className="item-details">
                <div className="item-name">{props.name}</div>
                <div className="item-price">£375.00</div>
            </div>
        </div>
    );
}

export default Item;