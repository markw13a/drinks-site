import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";

import { addProduct } from "../../state";
import { CATEGORIES } from "../../data";

const AddProductModal = ({ isModalVisible, closeModal }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const onSubmit = () => {
        dispatch(addProduct({ name, description, category }));
        closeModal();
    };

    return (
        <Modal isOpen={isModalVisible} contentLabel="Add a drink" onRequestClose={closeModal}>
            <label>
                Name
                <input value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Description
                <input value={description} onChange={e => setDescription(e.target.value)} />
            </label>
            <label>
                Category
                <select onChange={e => setCategory(e.target.value)} value={category}>
                    { CATEGORIES.map(category => <option value={category}>{ category }</option>) }
                </select>
            </label>
            <button onClick={onSubmit}> Add </button>
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
