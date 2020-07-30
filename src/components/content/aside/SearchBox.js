import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../../actions'



const SearchBox = () => {

    const mapState = (state) => {
        return {
            valueSearched: state.valueSearched
        }
    }

    const dispatch = useDispatch()
    const { valueSearched } = useSelector(mapState)

    const handleChange = value => {
        dispatch(actions.filterByName(value))

    }
    
    const handleSubmit = event => {
        event.preventDefault()
        dispatch(actions.filterByName(valueSearched))

    }

    return (
        <form className="search-form" onSubmit={(event) => handleSubmit(event)}>
            <input type="text" id="search-box" className="col-12" value={valueSearched} placeholder="Search..." onChange={(event) => handleChange(event.target.value)} />
        </form>
    );
}

export default SearchBox;