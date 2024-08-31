import { createAction } from "@reduxjs/toolkit";

const prepare = (data : any) => {
    return {
        payload: data
    }
}

const updateCartItem = createAction("config/updateCartItem", prepare);

export default updateCartItem;