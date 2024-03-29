import axios from 'axios'
/*
action types
*/

export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_DEPARTMENT = 'SET_DEPARTMENT'
export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST'
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE'
export const TOGGLE = 'TOGGLE'
export const SET_MINIMUM_PRICE = 'SET_MINIMUM_PRICE'
export const SET_MAXIMUM_PRICE = 'SET_MAXIMUM_PRICE'
export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST'
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE'
export const SET_VALUE_SEARCHED = 'SET_VALUE_SEARCHED'
export const FILTER_BY_NAME = 'FILTER_BY_NAME'
export const FETCH_CURRENT_ITEM_REQUEST = 'FETCH_CURRENT_ITEM_REQUEST'
export const FETCH_CURRENT_ITEM_SUCCESS = 'FETCH_CURRENT_ITEM_SUCCESS'
export const FETCH_CURRENT_ITEM_FAILURE = 'FETCH_CURRENT_ITEM_FAILURE'
export const ASIDE = 'ASIDE'
export const FETCH_BEST_SELLERS_REQUEST = 'FETCH_BEST_SELLERS_REQUEST'
export const FETCH_BEST_SELLERS_SUCCESS = 'FETCH_BEST_SELLERS_SUCCESS'
export const FETCH_BEST_SELLERS_FAILURE = 'FETCH_BEST_SELLERS_FAILURE'
export const FETCH_DEALS_REQUEST = 'FETCH_DEALS_REQUEST'
export const FETCH_DEALS_SUCCESS = 'FETCH_DEALS_SUCCESS'
export const FETCH_DEALS_FAILURE = 'FETCH_DEALS_FAILURE'
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
export const REMOVE_ITEM = 'REMOVE_ITEM'



/*
action creators
*/

export const setDepartment = department => {
    return {
        type: SET_DEPARTMENT,
        payload: department
    }
}

export const setCategory = (category, departments) => {
    return {
        type: SET_CATEGORY,
        payload: { category, departments }
    }
}

export const selectDepartment = (currentCategory, value) => async dispatch => {
    const departmentObject = currentCategory.departments.find(department => department.value === value)
    dispatch(setDepartment(departmentObject))

}

export const selectCategory = (categories, value) => async dispatch => {
    const categoryObject = categories.find(category => category.value === value)
    const departments = []
    categoryObject.departments.map(department => departments.push(department))
    dispatch(setCategory(categoryObject, departments))
}

export const fetchCategoriesRequest = () => {
    return {
        type: FETCH_CATEGORIES_REQUEST
    }
}


export const fetchCategoriesSuccess = categories => {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: categories
    }
}
export const fetchCategoriesFailure = error => {
    return {
        type: FETCH_CATEGORIES_FAILURE,
        payload: error
    }
}

export const fetchCategories = () => async dispatch => {
    axios.get('http://localhost:7000/categories')
        .then(response => {
            const categories = response.data
            dispatch(fetchCategoriesSuccess(categories),
            )
        }
        )
        .catch(error => {
            dispatch(fetchCategoriesFailure(error.message))
        })
}

export const filterByPrice = (category, department, minimumPrice, maximumPrice) => async dispatch => {
    dispatch(setMinimumPrice(minimumPrice))
    dispatch(setMaximumPrice(maximumPrice))
    dispatch(fetchItems(category, department, minimumPrice, maximumPrice))
}

export const toggle = toggler => {
    return {
        type: TOGGLE,
        payload: toggler
    }
}

export const setAside = aside => {
    return {
        type: ASIDE,
        payload: aside
    }
}

export const setMinimumPrice = value => {
    return {
        type: SET_MINIMUM_PRICE,
        payload: value
    }
}

export const setMaximumPrice = value => {
    return {
        type: SET_MAXIMUM_PRICE,
        payload: value
    }
}

export const fetchItemsRequest = () => {
    return {
        type: FETCH_ITEMS_REQUEST
    }
}

export const fetchItemsSuccess = items => {
    return {
        type: FETCH_ITEMS_SUCCESS,
        payload: items
    }
}
export const fetchItemsFailure = error => {
    return {
        type: FETCH_ITEMS_FAILURE,
        payload: error
    }
}

export const fetchItems = (category, department, minimumPrice, maximumPrice) => async dispatch => {
    if ((category.value !== "any" && department.value === "any") || department.value === undefined) {
        return axios.get(`http://localhost:7000/items?category=${category.id}&price_gte=${minimumPrice}&price_lte=${maximumPrice}`)
            .then(response => {
                const items = response.data
                dispatch(fetchItemsSuccess(items),
                )
            }
            )
            .catch(error => {
                dispatch(fetchItemsFailure(error.message))
            })
    }
    if (category.value !== "any" && department.value !== undefined && department.value !== "any") {
        return axios.get(`http://localhost:7000/items?category=${category.id}&department=${department.id}&price_gte=${minimumPrice}&price_lte=${maximumPrice}`)
            .then(response => {
                const items = response.data
                dispatch(fetchItemsSuccess(items),
                )
            }
            )
            .catch(error => {
                dispatch(fetchItemsFailure(error.message))
            })
    }
    return axios.get(`http://localhost:7000/items?price_gte=${minimumPrice}&price_lte=${maximumPrice}`)
        .then(response => {
            const items = response.data
            dispatch(fetchItemsSuccess(items),
            )
        }
        )
        .catch(error => {
            dispatch(fetchItemsFailure(error.message))
        })
}

export const setValueSearched = value => {
    return {
        type: SET_VALUE_SEARCHED,
        payload: value
    }
}

export const fetchSearchedItems = value => async dispatch => {
    return axios.get(`http://localhost:7000/items?name_like=${value}`)
        .then(response => {
            const items = response.data
            dispatch(fetchItemsSuccess(items),
            )
        }
        )
        .catch(error => {
            dispatch(fetchItemsFailure(error.message))
        })
}

export const filterByName = value => async dispatch => {
    dispatch(setValueSearched(value))
    dispatch(fetchSearchedItems(value))
}

export const fetchCurrentItemRequest = () => {
    return {
        type: FETCH_CATEGORIES_REQUEST
    }
}

export const fetchCurrentItemSuccess = currentItem => {
    return {
        type: FETCH_CURRENT_ITEM_SUCCESS,
        payload: currentItem
    }
}
export const fetchCurrentItemFailure = error => {
    return {
        type: FETCH_CURRENT_ITEM_FAILURE,
        payload: error
    }
}

export const fetchCurrentItem = (id, cart) => async dispatch => {
    return axios.get(`http://localhost:7000/items/${id}`)
        .then(response => {
            const currentItem = response.data
            const quantity = cart.items.find(item => { return item.id === currentItem.id && item.quantity })
            currentItem.quantity = quantity
            dispatch(fetchCurrentItemSuccess(currentItem),
            )
        }
        )
        .catch(error => {
            dispatch(fetchCurrentItemFailure(error.message))
        })
}

export const fetchBestSellersRequest = () => {
    return {
        type: FETCH_BEST_SELLERS_REQUEST
    }
}

export const fetchBestSellersSuccess = items => {
    return {
        type: FETCH_BEST_SELLERS_SUCCESS,
        payload: items
    }
}
export const fetchBestSellersFailure = error => {
    return {
        type: FETCH_BEST_SELLERS_FAILURE,
        payload: error
    }
}

export const fetchBestSellers = () => async dispatch => {
    return axios.get(`http://localhost:7000/items?sold_gte=10000`)
        .then(response => {
            const items = response.data
            dispatch(fetchBestSellersSuccess(items),
            )
        }
        )
        .catch(error => {
            dispatch(fetchBestSellersFailure(error.message))
        })
}

export const fetchDealsRequest = () => {
    return {
        type: FETCH_DEALS_REQUEST
    }
}

export const fetchDealsSuccess = items => {
    return {
        type: FETCH_DEALS_SUCCESS,
        payload: items
    }
}
export const fetchDealsFailure = error => {
    return {
        type: FETCH_DEALS_FAILURE,
        payload: error
    }
}

export const fetchDeals = () => async dispatch => {
    return axios.get(`http://localhost:7000/items?discount_gte=1`)
        .then(response => {
            const items = response.data
            dispatch(fetchDealsSuccess(items),
            )
        }
        )
        .catch(error => {
            dispatch(fetchDealsFailure(error.message))
        })
}

export const increaseQuantity = currentItem => {
    return {
        type: INCREASE_QUANTITY,
        payload: currentItem
    }
}

export const decreaseQuantity = currentItem => {
    return {
        type: DECREASE_QUANTITY,
        payload: currentItem
    }
}

export const removeItem = currentItem => {
    return {
        type: REMOVE_ITEM,
        payload: currentItem
    }
}

