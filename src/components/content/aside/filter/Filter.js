import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { selectCategory, fetchCategories } from '../../../../actions'

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

const Filter = (props) => {

    // const [minPrice, setMinPrice] = useState(0)
    // const handleMinPrice = event => {
    //     setMinPrice(event.target.value)
    // }

    // const [maxPrice, setMaxPrice] = useState(0)
    // const handleMaxPrice = event => {
    //     setMaxPrice(event.target.value)
    // }

    // const [department, setDepartment] = useState("select")
    // const handleDepartment = event => {
    //     console.log(event.target.value)
    //     setDepartment(event.target.value)
    // }
    // console.log(props);


    const handleChange = event => {
        event.preventDefault()
        props.selectCategory(event.target.value)
    }

    useEffect(() => {
        props.fetchCategories(categories)
    })


    return (
        <div className="filter-form col-12">
            <form id="filter-category">
                <label htmlFor="category">Category</label>
                <select className="col-12" id="category" name="category" size="5" value={props.currentCategory} onChange={(event) => handleChange(event)}>
                    {props.categories.map(category => <option key={category.value} value={category.value}>{category.name}</option>)}
                </select>
            </form>
            {props.currentCategory !== 'any' && <form id="filter-department">
                <label htmlFor="department">Department</label>
                <select className="col-12" id="department" name="department" size="5" value='{department}' onChange='{handleDepartment}'>
                    <option value="select">--- Select ---</option>
                    <option value="desktop PCs">Desktop PCs</option>
                    <option value="laptops">Laptops</option>
                    <option value="gamepads">Gamepads</option>
                    <option value="headphones">Headphones</option>
                    <option value="microphones">Microphones</option>
                    <option value="keyboards">Keyboards</option>
                </select>
            </form>}
            {/* <form id="filter-price">
                <label htmlFor="minimum-price">Min. Price: {minPrice}£</label>
                <input type="range" min="1" max="100" value={minPrice} className="slider col-xs-12" id="minimum-price" onChange={handleMinPrice} />
                <label htmlFor="maximum-price">Max. Price: {maxPrice}£</label>
                <input type="range" min="100" max="1000" value={maxPrice} className="slider col-xs-12" id="maximum-price" onChange={handleMaxPrice} />
            </form> */}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        currentCategory: state.currentCategory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectCategory: (value) => {
            dispatch(selectCategory(value))
        },
        fetchCategories: (categories) => {
            dispatch(fetchCategories(categories))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);