const initState = {
    categories: [],
    currentCategory: 'any'
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'SELECT_CATEGORY') {
        return { ...state, currentCategory: action.payload.value}
    }
    return state
}

export default rootReducer