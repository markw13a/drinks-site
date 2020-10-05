import React from 'react';
import { Provider } from "react-redux";
import { store } from "./state";
import { Categories } from "./components/Categories";
import { ProductCards } from "./components/ProductCards";
import { AddProductButton } from "./components/AddProductButton";
import "./style/main.scss";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="app__body">
          <Categories />
          <div className="app__hackyContainer">
            <ProductCards />
            <AddProductButton />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
