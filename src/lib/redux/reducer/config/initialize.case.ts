import { CaseReducer } from "@reduxjs/toolkit";
// import AppState from "@react/editor/redux/reducer/interface.ts";
import AppState from "../interface";
import { products } from "@/assets/data/Products";
import { categories } from "@/assets/data/Categories";

const initializeCase: CaseReducer = (state: AppState, action) => {
    state.config.initialized = true;
    state.config.products = products;
    state.config.categories = categories;
}

export default initializeCase;