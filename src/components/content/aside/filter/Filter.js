import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { selectCategory, fetchCategories } from '../../../../actions'



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
        props.fetchCategories()
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
        fetchCategories: () => {
            dispatch(fetchCategories())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);