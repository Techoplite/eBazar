import React from 'react';

const SearchBox = () => {
    return (
        <div className="serachbox-form col-12">
            <form id="search-form">
                <input type="text" id="search-box" className="col-12" placeholder="Search..." />
            </form>
        </div>
    );
}

export default SearchBox;