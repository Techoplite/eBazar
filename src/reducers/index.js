const initState = {
    categories: [],
    currentCategory: 'select'
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'SELECT_CATEGORY') {
        return { currentCategory: action.value }
    }
    return state
}

export default rootReducer