import * as actions from './../actions'

const initState = {
    loading: false,
    categories: [],
    currentCategory: {
        "id": 1,
        "value": "any",
        "name": "--- Any ---",
        "departments": []
    },
    currentDepartment: {
        "id": 0,
        "value": "any",
        "name": "--- Any ---",
    },
    toggler: 'hidden',
    error: '',
    minimumPrice: 0,
    maximumPrice: 5000,
    items: [],
    valueSearched: '',
    currentItem: null,
    aside: true,
    cart: {
        "id": 1,
        "user": "Mirko",
        "items": [],
        "isFinished": false,
        "hasBeenPayed": false
    }
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.SET_CATEGORY:
            return {
                ...state, currentCategory: action.payload.category, departments: action.payload.departments, currentDepartment: {
                    "id": 0,
                    "value": "any",
                    "name": "--- Any ---",
                }
            }
        case actions.FETCH_CATEGORIES_REQUEST:
            return { ...state, loading: true }
        case actions.FETCH_CATEGORIES_SUCCESS:
            return { ...state, loading: false, categories: action.payload }
        case actions.FETCH_CATEGORIES_FAILURE:
            return { ...state, loading: false, categories: action.payload }
        case actions.SET_DEPARTMENT:
            return { ...state, currentDepartment: action.payload }
        case actions.TOGGLE:
            return { ...state, toggler: action.payload }
        case actions.ASIDE:
            return { ...state, aside: action.payload }
        case actions.SET_MINIMUM_PRICE:
            return { ...state, minimumPrice: action.payload }
        case actions.SET_MAXIMUM_PRICE:
            return { ...state, maximumPrice: action.payload }
        case actions.FETCH_ITEMS_REQUEST:
            return { ...state, loading: true }
        case actions.FETCH_ITEMS_SUCCESS:
            return { ...state, loading: false, items: action.payload }
        case actions.FETCH_ITEMS_FAILURE:
            return { ...state, loading: false, items: action.payload }
        case actions.SET_VALUE_SEARCHED:
            return { ...state, valueSearched: action.payload }
        case actions.FETCH_CURRENT_ITEM_REQUEST:
            return { ...state, loading: true }
        case actions.FETCH_CURRENT_ITEM_SUCCESS:
            return { ...state, loading: false, currentItem: action.payload, aside: false }
        case actions.FETCH_CURRENT_ITEM_FAILURE:
            return { ...state, loading: false, currentItem: action.payload }
        case actions.FETCH_BEST_SELLERS_REQUEST:
            return { ...state, loading: true }
        case actions.FETCH_BEST_SELLERS_SUCCESS:
            return { ...state, loading: false, items: action.payload, aside: false }
        case actions.FETCH_BEST_SELLERS_FAILURE:
            return { ...state, loading: false, items: action.payload }
        case actions.FETCH_DEALS_REQUEST:
            return { ...state, loading: true }
        case actions.FETCH_DEALS_SUCCESS:
            return { ...state, loading: false, items: action.payload, aside: false }
        case actions.FETCH_DEALS_FAILURE:
            return { ...state, loading: false, items: action.payload }
        default:
            return state
    }
}

export default rootReducer