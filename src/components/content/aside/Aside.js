import React from 'react';
import SearchBox from './SearchBox';
import Filter from './filter/Filter';

const Aside = () => {
    return (
        <div className="aside">
            <SearchBox />
            <Filter />
        </div>
    );
}

export default Aside;