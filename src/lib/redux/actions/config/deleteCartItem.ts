import { createAction } from "@reduxjs/toolkit";

const prepare = (data : any) => {
    return {
        payload: data
    }
}

const deleteCartItem = createAction("config/deleteCartItem", prepare);

export default deleteCartItem;