import {CaseReducer} from "@reduxjs/toolkit";
import AppState from "../../reducer/interface";

const initializeCase: CaseReducer = (state: AppState, action) => {
    state.config.initialized = true;
    console.log(state.config.initialized);}

export default initializeCase;