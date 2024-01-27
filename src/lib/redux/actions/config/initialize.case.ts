import {CaseReducer} from "@reduxjs/toolkit";
import AppState from "../../reducer/config/interface";

const initializeCase: CaseReducer = (state: AppState, action) => {
    const data = action.payload;
    console.log('data',data);

}

export default initializeCase;