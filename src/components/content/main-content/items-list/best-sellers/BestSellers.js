import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../../../../actions'
import Item from '../item/Item';


const BestSellers = () => {
    const mapState = (state) => {
        return {
            items: state.items,
        }
    }

    const dispatch = useDispatch()
    const { items } = useSelector(mapState)

    useEffect(() => {
        dispatch(actions.fetchBestSellers())
        return () => dispatch(actions.setAside(true))
    }, [dispatch])

    return (
        <div className="items-list">
            {items && items.map(item => {
                const itemObject = item

                const avarageRating = ((item.rating[1] + 2 * item.rating[2] + 3 * item.rating[3] + 4 * item.rating[4] + 5 * item.rating[5]) / (item.rating[1] + item.rating[2] + item.rating[3] + item.rating[4] + item.rating[5])).toFixed(1)

                const totalFeedbacks = (item.rating[1] + item.rating[2] + item.rating[3] + item.rating[4] + item.rating[5])

                return <div className="item" key={item.name}>
                    <Item name={item.name} value={item.value} price={item.price} image={`/${item.image}`} discount={item.discount} rating={avarageRating} totalFeedbacks={totalFeedbacks} left={item.left} item={itemObject} />
                </div>
            }
            )}
        </div>);
}

export default BestSellers;