import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../../../../actions'

const ItemDeatail = (props) => {
    const mapState = (state) => {
        return {
            currentItem: state.currentItem
        }
    }

    const dispatch = useDispatch()
    const { currentItem } = useSelector(mapState)


    useEffect(() => {
        let { id } = props.match.params
        dispatch(actions.fetchCurrentItem(id))
    }, [dispatch, props.match.params])

    return (<div>This is the Item Detail page {currentItem.name}</div>);
}

export default ItemDeatail;