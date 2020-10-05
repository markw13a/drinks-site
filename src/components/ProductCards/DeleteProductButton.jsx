import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../state";

const DeleteProductButton = ({ name, category }) => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(deleteProduct({ name, category }));

    return (
        <div className="deleteProduct">
            <button className="deleteProduct__button" title="Delete" onClick={onClick}> X </button>
        </div>
    );
};

export {
    DeleteProductButton
};
