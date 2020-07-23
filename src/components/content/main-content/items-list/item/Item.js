import React from 'react';

const Item = () => {
    return (
        <div className="item">
            <img src={require("./laptop.jpg")} />
            <div className="item-details">
                <div className="item-name">ADMI GAMING PC PACKAGE:, AMD QUAD Core A10-9700 Graphics, 1TB Hard Drive, 8GB 2666Mhz DDR4 RAM, 300Mbps Wifi, Pre-Installed with </div>
                <div className="item-price">£375.00</div>
            </div>
        </div>
    );
}

export default Item;