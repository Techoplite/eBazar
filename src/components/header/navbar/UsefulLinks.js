import React from 'react';
import { NavLink } from 'react-router-dom'


const UsefulLinks = (props) => {
    return (
        <div className="useful-links">
            <NavLink
                to="/best-sellers/"
                className="toggle-link"
                id="best-sellers"
            >
                Best Sellers
            </NavLink>
            <NavLink
                to="/deals-of-the-day/"
                className="toggle-link"
                id="deals-of-the-day"
            >
                Deals of the day
            </NavLink>
        </div>
    );
}

export default UsefulLinks;