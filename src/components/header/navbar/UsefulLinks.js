import React from 'react';

const UsefulLinks = (props) => {
    return (
        <div className="useful-links">
            <a href="/best-sellers/" className="toggle-link" id="best-sellers">Best Sellers</a>
            <a href="/deals-of-the-day/" className="toggle-link" id="deals-of-the-day">Deals of the day</a>
        </div>
    );
}

export default UsefulLinks;