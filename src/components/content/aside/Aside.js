import React from 'react';
import SearchBox from './SearchBox';
import Filter from './filter/Filter';
import { useSelector } from 'react-redux';

const Aside = () => {
    const mapState = (state) => {
        return {
            aside: state.aside,
        }
    }

    const { aside } = useSelector(mapState)

    return (
        aside &&
        <div className="aside">
            <SearchBox />
            <Filter />
        </div>
    );
}

export default Aside;