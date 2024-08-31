import { CaseReducer } from "@reduxjs/toolkit";
import { recalculateTotals, updateItemData } from "@/lib/helper/cart_pricing";

const updateCartItem: CaseReducer = (state, action) => {
    const { id, quantity }: any = action.payload;

    const item = state.config.cart.items[id];

    if (item) {
        updateItemData(item, quantity);

        const totals = recalculateTotals(state.config.cart.items);

        state.config.cart.totalAmount = totals.totalAmount;
        state.config.cart.totalQuantity = totals.totalQuantity;
        state.config.cart.subTotal = totals.subTotal;
    }
}

export default updateCartItem;
