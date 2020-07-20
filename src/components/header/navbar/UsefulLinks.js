import React from 'react';

const UsefulLinks = (props) => {
    return (
        <div className={`${props.toggler}`} id="useful-links">
            <a href="/best-sellers/" className={`useful-link ${props.toggler}`}>Best Sellers</a>
            <a href="/deals-of-the-day/" className={`useful-link ${props.toggler}`} id="deals">Deals of the day</a>
        </div>
    );
}

export default UsefulLinks;