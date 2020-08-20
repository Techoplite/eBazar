import React from 'react';
import ItemsList from './items-list/ItemsList';
import BestSellers from './items-list/best-sellers/BestSellers';
import DealsOfTheDay from './items-list/deals-of-the-day/DealOfTheDay';
import { Switch, Route } from 'react-router-dom'
import ItemDetail from './items-list/item/ItemDetail';
import CartSummary from './CartSummary';

const MainContent = () => {
    return (
        <div className="main-content">
            <Switch>
                <Route path="/" exact component={ItemsList} />
                <Route path="/best-sellers" exact component={BestSellers} />
                <Route path="/deals-of-the-day" exact component={DealsOfTheDay} />
                <Route path="/:id" exact component={ItemDetail} />
            </Switch>
            <CartSummary />
        </div>

    );
}

export default MainContent;