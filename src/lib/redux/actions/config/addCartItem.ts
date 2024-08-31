import { createAction } from "@reduxjs/toolkit";

const prepare = (data : any) => {
    return {
        payload: data
    }
}

const addCartItem = createAction("config/addCartItem", prepare);

export default addCartItem;