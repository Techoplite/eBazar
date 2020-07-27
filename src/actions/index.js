import axios from 'axios'
/*
action types
*/

export const SET_CATEGORY = 'SET_CATEGORY'
export const SELECT_DEPARTMENT = 'SELECT_DEPARTMENT'
export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST'
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE'
export const TOGGLE = 'TOGGLE'
export const SET_MINIMUM_PRICE = 'SET_MINIMUM_PRICE'
export const SET_MAXIMUM_PRICE = 'SET_MAXIMUM_PRICE'
export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST'
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE'


/*
action creators
*/

export const setCategory = (category, departments) => {
    return {
        type: SET_CATEGORY,
        payload: { category, departments }
    }
}

export const selectCategory = (categories, value) => async dispatch => {
    const categoryObject = categories.find(category => category.value === value)
    const departments = []
    categoryObject.departments.map(department => departments.push(department))
    dispatch(setCategory(categoryObject, departments))
    dispatch(fetchItems(categoryObject, "any"))
    
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


export const selectDepartment = value => {
    return {
        type: SELECT_DEPARTMENT,
        payload: value
    }
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
    if (category !== undefined || category !== "any") {
        axios.get(`http://localhost:7000/items?category=${category.id}`)
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
    else if (category === undefined || category === "any" || department === undefined || department === "any") {
        axios.get('http://localhost:7000/items')
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
    else if (department !== undefined || department !== "any") {
        axios.get(`http://localhost:7000/items?department=${department.id}`)
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
}
