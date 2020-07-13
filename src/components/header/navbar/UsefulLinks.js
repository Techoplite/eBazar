import React from 'react';

const UsefulLinks = (props) => {
    return (
        <div className={`col-8 col-s-6 col-xs-12 ${props.toggle}`} id="useful-links">
            <a href="/best-sellers/" className="auth-link">Best Sellers</a>
            <a href="/deals-of-the-day/" className="auth-link">Deals of the day</a>
        </div>
    );
}

export default UsefulLinks;