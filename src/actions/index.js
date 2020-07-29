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
export const GET_MINIMUM_AVAILABLE_PRICE = 'GET_MINIMUM_AVAILABLE_PRICE'


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
    // dispatch(fetchItems(currentCategory, departmentObject)) 99% NOT NEEDED

}

export const selectCategory = (categories, value) => async dispatch => {
    const categoryObject = categories.find(category => category.value === value)
    const departments = []
    categoryObject.departments.map(department => departments.push(department))
    dispatch(setCategory(categoryObject, departments))
    // dispatch(fetchItems(categoryObject, {
    //     "id": 0,
    //     "value": "any",
    //     "name": "--- Any ---",
    // })) 99% NOT NEEDED

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


export const toggle = toggler => {
    return {
        type: TOGGLE,
        payload: toggler
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


export const loadItemData = items => async dispatch => {
    dispatch(fetchItemsSuccess(items))
    dispatch(getMinimumAvailablePrice(items))

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

export const fetchItems = (category, department) => async dispatch => {
    if (category.value !== "any" && department.value === "any" || department.value === undefined) {
        return axios.get(`http://localhost:7000/items?category=${category.id}`)
            .then(response => {
                const items = response.data
                dispatch(loadItemData(items),
                )
            }
            )
            .catch(error => {
                dispatch(fetchItemsFailure(error.message))
            })
    }
    if (category.value !== "any" && department.value !== undefined && department.value !== "any") {
        return axios.get(`http://localhost:7000/items?category=${category.id}&department=${department.id}`)
            .then(response => {
                const items = response.data
                dispatch(loadItemData(items),
                )
            }
            )
            .catch(error => {
                dispatch(fetchItemsFailure(error.message))
            })
    }
    return axios.get('http://localhost:7000/items')
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

export const getMinimumAvailablePrice = items => {
    let prices = []
    items.map(item => prices.push(item.price))
    prices.sort(function (a, b) { return a - b })
    console.log('prices :>> ', prices);
    const value = prices[0]
    console.log('value :>> ', value);
    return {
        type: GET_MINIMUM_AVAILABLE_PRICE,
        payload: value
    }
}
