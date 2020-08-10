import React from 'react';
import ItemsList from './items-list/ItemsList';
import BestSellers from './items-list/best-sellers/BestSellers';
import DealsOfTheDay from './items-list/deals-of-the-day/DealOfTheDay';
import { Switch, Route } from 'react-router-dom'
import ItemDeatail from './items-list/item/ItemDetail';

const MainContent = () => {
    return (
        <div className="main-content">
            <Switch>
                <Route path="/" exact>
                    <ItemsList />
                </Route>
                <Route path="/best-sellers" exact>
                    <BestSellers />
                </Route>
                <Route path="/deals-of-the-day" exact>
                    <DealsOfTheDay />
                </Route>
                <Route path="/:id" exact>
                    <ItemDeatail />
                </Route>
            </Switch>
        </div>
    );
}

export default MainContent;