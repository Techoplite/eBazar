import * as actions from './../actions'

const initState = {
    loading: false,
    categories: [],
    currentCategory: 'any',
    toggler: 'hidden',
    error: ''

}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.SELECT_CATEGORY:
            return { ...state, currentCategory: action.payload.value, departments: action.payload.departments }
        case actions.FETCH_CATEGORIES_REQUEST:
            return { ...state, loading: true }
        case actions.FETCH_CATEGORIES_SUCCESS:
            return { ...state, loading: false, categories: action.payload }
        case actions.FETCH_CATEGORIES_FAILURE:
            return { ...state, loading: false, categories: action.payload }
        case actions.TOGGLE:
            return { ...state, toggler: action.payload }
        default:
            return state
    }
}

export default rootReducer