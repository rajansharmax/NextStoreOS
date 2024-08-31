import { CaseReducer } from "@reduxjs/toolkit";
import { recalculateTotals } from "@/lib/helper/cart_pricing";

const deleteCartItem: CaseReducer = (state, action) => {
    const id: any = action.payload;

    if (state.config.cart.items[id]) {
        delete state.config.cart.items[id];

        const totals = recalculateTotals(state.config.cart.items);

        state.config.cart.totalAmount = totals.totalAmount;
        state.config.cart.totalQuantity = totals.totalQuantity;
        state.config.cart.subTotal = totals.subTotal;
    }
};

export default deleteCartItem;
