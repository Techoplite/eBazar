
/*
action types
*/

export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const TOGGLE = 'TOGGLE'


/*
action creators
*/

export const selectCategory = value => {
    return {
        type: SELECT_CATEGORY,
        payload: { value }
    }
}


export const fetchCategories = categories => {
    return {
        type: FETCH_CATEGORIES,
        payload: { categories }
    }
}

export const toggle = toggler => {
    return {
        type: TOGGLE,
        payload: { toggler }
    }
}
