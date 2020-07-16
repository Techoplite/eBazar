import * as actions from './../actions'

const initState = {
    categories: [],
    currentCategory: 'any',
    toggler: 'hidden'
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.SELECT_CATEGORY:
            return { ...state, currentCategory: action.payload.value }
        case actions.FETCH_CATEGORIES:
            console.log('action :>> ', action);
            return { ...state, categories: action.payload }
        case actions.TOGGLE:
            return { ...state, toggler: action.payload.toggler }
        default:
            return state
    }
}

export default rootReducer