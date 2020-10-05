import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CATEGORIES } from "../../data";
import { toggleActiveCategory } from "../../state";

const Category = ({ category }) => {
    const dispatch = useDispatch();
    const isActive = useSelector(state => state.activeCategories[category]);
    const onChange = () => dispatch(toggleActiveCategory(category));

    return (
        <li className="category">
            <label className="category__label">
                {category}
                <input type="checkbox" onChange={onChange} checked={isActive} /> 
            </label>
        </li>
    );
};

const Categories = () => (
    <div className="categories">
        <span className="categories__header"> Categories </span>
        <ul className="categories__list">
            { CATEGORIES.map(category => <Category category={category} key={category} /> ) }
        </ul>
    </div>
);

export {
    Categories
};
