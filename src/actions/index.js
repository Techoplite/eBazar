/*
action types
*/

export const SELECT_CATEGORY = 'SELECT_CATEGORY'

const selectCategory = (value) => {
    return {
        type: 'SELECT_CATEGORY',
        payload: { value }
    }
}

export default selectCategory