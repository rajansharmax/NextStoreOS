import { CaseReducer } from "@reduxjs/toolkit";
import { recalculateTotals } from "@/lib/helper/cart_pricing";

const addCartItem: CaseReducer = (state, action) => {
    const newItem : any = action.payload;
    state.config.cart.items[newItem.id] = newItem;

    const totals = recalculateTotals(state.config.cart.items);

    state.config.cart.totalAmount = totals.totalAmount;
    state.config.cart.totalQuantity = totals.totalQuantity;
    state.config.cart.subTotal = totals.subTotal;
};

export default addCartItem;
