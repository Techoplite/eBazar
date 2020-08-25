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
        case actions.INCREASE_QUANTITY:
            {
                let cart = state.cart
                let itemToAdd = action.payload
                cart.items && cart.items.map(cartItem => {
                    console.log('cartItem.id, itemToAdd.id, itemToAdd.quantity :>> ', cartItem.id, itemToAdd.id, itemToAdd.quantity);
                    if (cartItem.id === itemToAdd.id) {
                        const itemToUpload = cart.items.find(cartItem => cartItem.id === itemToAdd.id)
                        console.log("ITEM INCREASED");
                        itemToUpload.quantity++
                        return cart
                    }
                    else if (cartItem.id !== itemToAdd.id && (!itemToAdd.quantity || isNaN(itemToAdd.quantity) || itemToAdd.quantity === 0)) {
                        itemToAdd.quantity = 1
                        console.log("ITEM SET TO 1");
                        cart.items = [...cart.items, itemToAdd]
                        return cart
                    }
                })
                !cart.items.length
                    && (itemToAdd.quantity = 1)
                    && (cart.items = [...cart.items, itemToAdd])
                    && console.log("NO ITEM CART ITEMS LENGTH")
                return { ...state, cart: cart }
            }
        case actions.DECREASE_QUANTITY:
            {
                let cart = state.cart
                let itemToDecrese = action.payload
                cart.items && cart.items.map(cartItem => {
                    if (cartItem.id === itemToDecrese.id) {
                        const itemToUpload = cart.items.find(cartItem => cartItem.id === itemToDecrese.id)
                        itemToUpload.quantity--
                        return cart
                    }
                    else if (cartItem.id !== itemToDecrese.id && !itemToDecrese.quantity) {
                        itemToDecrese.quantity = 1
                        cart.items = [...cart.items, itemToDecrese]
                        return cart
                    }
                })
                !cart.items.length
                    && (itemToDecrese.quantity = 1)
                    && (cart.items = [...cart.items, itemToDecrese])
                return { ...state, cart: cart }
            }
        case actions.REMOVE_ITEM:
            {
                let cart = state.cart
                let itemToRemove = action.payload
                cart.items.find(item => item.id === itemToRemove.id && (item.quantity = 0))
                const cartItems = cart.items.filter(item => item.id !== itemToRemove.id)
                cart.items = cartItems
                return { ...state, cart: cart }
            }
        default:
            return state
    }
}

export default rootReducer