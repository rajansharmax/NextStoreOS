import { CaseReducer } from "@reduxjs/toolkit";
import AppState from "../interface";
import { products } from "@/assets/data/Products";
import { categories } from "@/assets/data/Categories";
import { cart } from "@/assets/data/Cart";

const initializeCase: CaseReducer = (state: AppState, action) => {
    state.config.initialized = true;
    state.config.products = products;
    state.config.categories = categories;
    state.config.cart = cart;
}

export default initializeCase;