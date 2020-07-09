import React from 'react';
import SearchBox from './SearchBox';
import Filter from './Filter';

const Aside = () => {
    return (
        <div className="col-3 col-s-12 col-xs-12" id="aside">
            <SearchBox />
            <Filter />
        </div>
    );
}

export default Aside;