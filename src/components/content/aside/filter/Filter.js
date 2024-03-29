import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../../../actions'



const Filter = () => {

    const mapState = (state) => {
        return {
            categories: state.categories,
            currentCategory: state.currentCategory,
            currentDepartment: state.currentDepartment,
            departments: state.departments,
            minimumPrice: state.minimumPrice,
            maximumPrice: state.maximumPrice,
        }
    }

    const dispatch = useDispatch()
    const {
        categories,
        currentCategory,
        currentDepartment,
        departments,
        minimumPrice,
        maximumPrice,
    } = useSelector(mapState)

    const handleChange = event => {
        event.preventDefault()
        switch (event.target.id) {
            case "category":
                return dispatch(actions.selectCategory(categories, event.target.value))
            case "department":
                return dispatch(actions.selectDepartment(currentCategory, event.target.value))
            case "minimum-price":
                return dispatch(actions.filterByPrice(currentCategory, currentDepartment, event.target.value, maximumPrice))
            case "maximum-price":
                return dispatch(actions.filterByPrice(currentCategory, currentDepartment, minimumPrice, event.target.value))
            default:
                { }
        }


    }

    useEffect(() => {
        dispatch(actions.fetchCategories())
    }, [dispatch])


    return (
        <div className="filter">
            <form className="filter-category">
                <label htmlFor="category">Category</label>
                <select className="select-category" id="category" name="category" size="5" value={currentCategory.value} onChange={(event) => handleChange(event)}>
                    {categories.map(category => <option key={category.value} value={category.value}>{category.name}</option>)}
                </select>
            </form>
            {currentCategory.value !== 'any' && <form className="filter-department">
                <label htmlFor="department">Department</label>
                <select className="select-department" id='department' name="department" size="5" value={currentDepartment.value} onChange={(event) => handleChange(event)}>
                    {departments.map(department =>
                        <option key={department.value} value={department.value}>{department.name}</option>
                    )}
                </select>
            </form>}
            <form className="filter-price">
                <label htmlFor="minimum-price">Min. Price: £{minimumPrice}</label>
                <input type="range" min="0" max="450" step="50" value={minimumPrice} className="slider col-xs-12" id="minimum-price" onChange={(event) => handleChange(event)} />
                <label htmlFor="maximum-price">Max. Price: £{maximumPrice}</label>
                <input type="range" min="500" max="2000" step="100" value={maximumPrice} className="slider col-xs-12" id="maximum-price" onChange={(event) => handleChange(event)} />
            </form>
        </div>
    );
}




export default Filter;