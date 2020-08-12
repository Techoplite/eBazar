import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../../../../actions'

const ItemDetail = (props) => {
    const mapState = (state) => {
        return {
            currentItem: state.currentItem,
        }
    }

    const dispatch = useDispatch()
    const { currentItem } = useSelector(mapState)


    useEffect(() => {
        let { id } = props.match.params
        dispatch(actions.fetchCurrentItem(id))
        dispatch(actions.setAside(false))
        return () => dispatch(actions.setAside(true))
    }, [dispatch, props.match.params])

    return (
        currentItem !== null &&
        <div id="item-detail">
            <div id="picture">
                <img src={process.env.PUBLIC_URL + `${currentItem.image}`} alt="" />
            </div>
            <div id="details">
                <p>{currentItem.name}</p>
                <p>{currentItem.features}</p>
                <p>{currentItem.price}</p>
                <p>rate 1{currentItem.rating[0]}</p>
                <p>rate 2{currentItem.rating[1]}</p>
                <p>rate 3{currentItem.rating[3]}</p>
                <p>rate 4{currentItem.rating[4]}</p>
                <p>rate 5{currentItem.rating[5]}</p>
            </div>
        </div >
    );
}

export default ItemDetail;