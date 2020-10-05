import React, { useState } from "react";
import { useDispatch } from "react-redux";
// Generally not keen on using outside components like this one
// but it's an easy way to save time here
import Modal from "react-modal";

import { addProduct } from "../../state";
import { CATEGORIES } from "../../data";

const AddProductModal = ({ isModalVisible, closeModal }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState(CATEGORIES[0]);

    const onSubmit = () => {
        dispatch(addProduct({ name, description, category }));
        closeModal();
    };

    return (
        <Modal isOpen={isModalVisible} contentLabel="Add a drink" onRequestClose={closeModal}>
            <div className="modal">
                <div className="modal__inputs">
                    <label className="modal__label">
                        Name
                        <input value={name} onChange={e => setName(e.target.value)} />
                    </label>
                    <label className="modal__label">
                        Description
                        <input value={description} onChange={e => setDescription(e.target.value)} />
                    </label>
                    <label className="modal__label">
                        Category
                        <select onChange={e => setCategory(e.target.value)} value={category}>
                            { CATEGORIES.map(category => <option value={category}>{ category }</option>) }
                        </select>
                    </label>
                    <button className="modal__submit" onClick={onSubmit}> Add </button>
                </div>
            </div>
        </Modal>
    );
};

const AddProductButton = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    return (
        <div className="addButton">
            <button className="addButton__button" title="Add a new drink" onClick={openModal}> + </button>
            <AddProductModal isModalVisible={isModalVisible} closeModal={closeModal} />
        </div>
    );
};

export {
    AddProductButton
};
