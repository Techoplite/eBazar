import React from 'react';

const UsefulLinks = (props) => {
    return (
        <div className={` ${props.toggler}`} id="useful-links">
            <a href="/best-sellers/" className="useful-link">Best Sellers</a>
            <a href="/deals-of-the-day/" className="useful-link">Deals of the day</a>
        </div>
    );
}

export default UsefulLinks;