import React from 'react';
import Item from './items-list/item/Item';
import ItemsList from './items-list/ItemsList';

const MainContent = () => {
    return ( 
        <div className="main-content">
            <ItemsList/>
        </div>
     );
}
 
export default MainContent;