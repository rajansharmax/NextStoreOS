import {CaseReducer} from "@reduxjs/toolkit";
// import AppState from "@react/editor/redux/reducer/interface.ts";
import AppState from "../interface";

const initializeCase: CaseReducer = (state: AppState, action) => {
    state.config.initialized = true;
}

export default initializeCase;