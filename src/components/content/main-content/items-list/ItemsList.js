import React from 'react';
import Item from './item/Item';

const ItemsList = () => {
    return (
        <div className="items-list">
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
}

export default ItemsList;