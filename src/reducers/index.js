import { SELECT_CATEGORY } from './../actions'

const initState = {
    categories: [],
    currentCategory: 'any'
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return { ...state, currentCategory: action.payload.value }
        default:
            return state
    }
}

export default rootReducer