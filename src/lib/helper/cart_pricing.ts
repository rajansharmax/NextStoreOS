import { CartItem } from "@/lib/redux/types";

export const updateItemData = (item: CartItem, quantity: number) => {
    item.quantity = quantity;
    item.totalAmount = item.unitAmount * quantity;
};

export const recalculateTotals = (items: { [key: number]: CartItem }) => {
    let newTotalAmount = 0;
    let newTotalQuantity = 0;

    for (const key in items) {
        const cartItem = items[key];
        newTotalAmount += cartItem.unitAmount * cartItem.quantity;
        newTotalQuantity += cartItem.quantity;
    }
    
    return {
        totalAmount: newTotalAmount,
        totalQuantity: newTotalQuantity,
        subTotal: newTotalAmount,
    };
};
