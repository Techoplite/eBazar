import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../../../actions'
import Item from './item/Item';

const ItemsList = () => {

    const mapState = (state) => {
        return {
            currentCategory: state.currentCategory,
            currentDepartment: state.currentDepartment,
            items: state.items,
        }
    }

    const dispatch = useDispatch()
    const { items, currentCategory, currentDepartment } = useSelector(mapState)

    useEffect(() => {
        dispatch(actions.fetchItems(currentCategory, currentDepartment))
    }, [currentCategory, currentDepartment, dispatch])

    return (
        <div className="items-list">
            {items && items.map(item =>
                <div className="item" key={item.name}>
                    <Item name={item.name} value={item.value} price={item.price}/>
                </div>
            )}
        </div>
    );
}

export default ItemsList;