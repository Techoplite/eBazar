import axios from 'axios'
/*
action types
*/

export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const SELECT_DEPARTMENT = 'SELECT_DEPARTMENT'
export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST'
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE'
export const TOGGLE = 'TOGGLE'


/*
action creators
*/

export const selectCategory = (categories, value) => {
    const categoryObject = categories.find(category => category.value === value)
    const departments = []
    categoryObject.departments.map(department => departments.push(department))
    return {
        type: SELECT_CATEGORY,
        payload: { value, departments }
    }
}

export const fetchCategoriesRequest = () => {
    return {
        type: FETCH_CATEGORIES_REQUEST
    }
}


export const fetchCategoriesSuccess = (categories) => {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: categories
    }
}
export const fetchCategoriesFailure = (error) => {
    return {
        type: FETCH_CATEGORIES_FAILURE,
        payload: error
    }
}

export const fetchCategories = () => {
    return function (dispatch) {
        dispatch(fetchCategoriesRequest())
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
}


export const selectDepartment = (value) => {
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
