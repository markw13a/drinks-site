import { createStore } from "redux";
import produce from "immer";
import { PRODUCTS, CATEGORIES } from "../data";

// { "Wine": true }
const initialActiveCategories = CATEGORIES.reduce((activeCategories, category) => {
    activeCategories[category] = true;
    return activeCategories;
} , {});

const initialState = {
    products: PRODUCTS,
    activeCategories: initialActiveCategories
};

const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            return produce(state, nextState => {
                const { name, description, category } = action;
                const isValidCategory = CATEGORIES.includes(category);

                // Would usually want to display an error rather than crashing the app
                if (!name || !description || !isValidCategory) {
                    throw new Error("Product requires valid name, description and category");
                }

                nextState.products.push({ name, description, category });
            });
        }
        case DELETE_PRODUCT: {
            return produce(state, nextState => {
                const { name, category } = action;

                // This operation would be safer and easier if products carried a unique ID                
                const isNotExactMatch = product => !(product.name === name && product.category === category);

                nextState.products = nextState.products.filter(isNotExactMatch);
            });
        }
        case TOGGLE_ACTIVE_CATEGORY: {
            return produce(state, nextState => {
                const { category } = action;
                const isCategoryActive = nextState.activeCategories[category];
                nextState.activeCategories[category] = !isCategoryActive;
            });
        }
        default: {
            return state;
        }
    }
};

const ADD_PRODUCT = "ADD_PRODUCT";
const addProduct = ({ name, description, category }) => ({ type: ADD_PRODUCT, name, description, category });

const DELETE_PRODUCT = "DELETE_PRODUCT";
const deleteProduct = ({ name, category }) => ({ type: DELETE_PRODUCT, name, category });

const TOGGLE_ACTIVE_CATEGORY = "TOGGLE_ACTIVE_CATEGORY";
const toggleActiveCategory = category => ({ type: TOGGLE_ACTIVE_CATEGORY, category });

const store = createStore(appReducer);

export {
    store,
    addProduct, 
    deleteProduct,
    toggleActiveCategory
};
