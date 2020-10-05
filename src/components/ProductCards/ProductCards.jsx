import React from "react";
import { useSelector } from "react-redux";
import { DeleteProductButton } from "./DeleteProductButton";

const MAX_DESCRIPTION_LENGTH = 100;

const ProductCard = ({ name, description, category }) => {
    const activeCategories = useSelector(state => state.activeCategories);
    const isCategoryActive = activeCategories[category];
    
    if (!isCategoryActive) {
        return null;
    }

    if (description.length > MAX_DESCRIPTION_LENGTH) {
        description = description.substring(0, MAX_DESCRIPTION_LENGTH);
        description += "...";
    }

    return (
        <div className="product">
            <DeleteProductButton name={name} category={category} />
            <div className="product__title"> 
                { name }
            </div>
            <div className="product__description"> 
                { description }
            </div>
        </div>
    );
};

const ProductCards = () => {
    const products = useSelector(state => state.products);
    return (
        <div className="products"> 
            { products.map(product => <ProductCard {...product} key={product.label} />) }
        </div>
    );
};

export {
    ProductCards
};
