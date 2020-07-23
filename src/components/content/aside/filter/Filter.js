import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../../actions'



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
        switch (event.target.id) {
            case "category":
                return props.selectCategory(props.categories, event.target.value)
            case "department":
                return props.selectDepartment(event.target.value)
            case "minimum-price":
                return props.setMinimumPrice(event.target.value)
        }


    }

    useEffect(() => {
        props.fetchCategories()
    }, [])


    return (
        <div className="filter">
            <form className="filter-category">
                <label htmlFor="category">Category</label>
                <select className="select-category" id="category" name="category" size="5" value={props.currentCategory} onChange={(event) => handleChange(event)}>
                    {props.categories.map(category => <option key={category.value} value={category.value}>{category.name}</option>)}
                </select>
            </form>
            {props.currentCategory !== 'any' && <form className="filter-department">
                <label htmlFor="department">Department</label>
                <select className="select-department" id='department' name="department" size="5" value={props.currentDepartment} onChange={(event) => handleChange(event)}>
                    <option key='any' value='any'>--- Any ---</option>
                    {props.departments.map(department =>
                        <option key={department.value} value={department.value}>{department.name}</option>
                    )}
                </select>
            </form>}
            <form className="filter-price">
                <label htmlFor="minimum-price">Min. Price: £{props.minimumPrice}</label>
                <input type="range" min="1" max="100" value={props.minimumPrice} className="slider col-xs-12" id="minimum-price" onChange={(event) => handleChange(event)} />
                <label htmlFor="maximum-price">Max. Price: maxPrice£</label>
                <input type="range" min="100" max="1000" value="{maxPrice}" className="slider col-xs-12" id="maximum-price" onChange={(event) => handleChange(event)} />
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        currentCategory: state.currentCategory,
        currentDepartment: state.currentDepartment,
        departments: state.departments,
        minimumPrice: state.minimumPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectCategory: (categories, value) => {
            dispatch(actions.selectCategory(categories, value))
        },
        fetchCategories: () => {
            dispatch(actions.fetchCategories())
        },
        selectDepartment: value => {
            dispatch(actions.selectDepartment(value))
        },
        setMinimumPrice: value => {
            dispatch(actions.setMinimumPrice(value))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);