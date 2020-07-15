const selectCategory = (value) => {
    return {
        type: 'SELECT_CATEGORY',
        payload: { value }
    }
}

export default selectCategory