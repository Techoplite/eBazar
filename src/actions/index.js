const categories = [
    {
        id: '1',
        value: 'any',
        name: '--- Any ---',
        departments: []
    },
    {
        id: '2',
        value: 'computers-and-accessories',
        name: 'Computers and Accessories',
        departments: [
            {
                id: '1',
                value: 'desktop-pc',
                name: 'Desktop PCs'
            },
            {
                id: '2',
                value: 'laptops',
                name: 'Laptops'
            },
            {
                id: '3',
                value: 'keyboards',
                name: 'Keyboards'
            },
            {
                id: '4',
                value: 'headphones',
                name: 'Headphones'
            },
            {
                id: '5',
                value: 'mouses',
                name: 'Mouses'
            },
            {
                id: '6',
                value: 'gamepads',
                name: 'Gamepads'
            },
        ]
    },
    {
        id: '3',
        value: 'fashion',
        name: 'Fashion',
        departments: [
            {
                id: '1',
                value: 'dresses',
                name: 'dresses'
            },
            {
                id: '2',
                value: 'shoes',
                name: 'Shoes'
            },
            {
                id: '3',
                value: 'pants',
                name: 'Pants'
            },
            {
                id: '4',
                value: 'sunglasses',
                name: 'Sunglasses'
            },
            {
                id: '5',
                value: 'handbags',
                name: 'Handbags'
            },
            {
                id: '6',
                value: 'hats',
                name: 'Hats'
            },
        ]
    },
    {
        id: '4',
        value: 'digital-music',
        name: 'Digital Music',
        departments: [
            {
                id: '1',
                value: 'rock',
                name: 'Rock'
            },
            {
                id: '2',
                value: 'pop',
                name: 'Pop'
            },
            {
                id: '3',
                value: 'house-and-techno',
                name: 'House and Techno'
            },
            {
                id: '4',
                value: 'trap',
                name: 'Trap'
            },
            {
                id: '5',
                value: 'indie',
                name: 'Indie'
            },
            {
                id: '6',
                value: 'hip-hop',
                name: 'Hip-Hop'
            },
        ]
    },
    {
        id: '5',
        value: 'house',
        name: 'House',
        departments: [
            {
                id: '1',
                value: 'kitchen',
                name: 'kitchen'
            },
            {
                id: '2',
                value: 'garden',
                name: 'Garden'
            },
            {
                id: '3',
                value: 'bedroom',
                name: 'Bedroom'
            },
            {
                id: '4',
                value: 'bathroom',
                name: 'Bathroom'
            },
            {
                id: '5',
                value: 'livingroom',
                name: 'Livingroom'
            },
            {
                id: '6',
                value: 'cleaning',
                name: 'Cleaning'
            },
        ]
    },
    {
        id: '6',
        value: 'grocery',
        name: 'Grocery',
        departments: [
            {
                id: '1',
                value: 'vegetables',
                name: 'Vegetables'
            },
            {
                id: '2',
                value: 'pasta and rice',
                name: 'Pasta and Rice'
            },
            {
                id: '3',
                value: 'snacks',
                name: 'Snacks'
            },
            {
                id: '4',
                value: 'canned-food',
                name: 'Canned Food'
            },
            {
                id: '5',
                value: 'frozen',
                name: 'Frozen'
            },
            {
                id: '6',
                value: 'dairy',
                name: 'Dairy'
            },
        ]
    },
]


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


export const fetchCategories = () => {
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
