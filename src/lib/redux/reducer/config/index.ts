import ConfigState from "./interface"
export { default as initialize } from "./initialize.case";
export { default as updateCartItem } from "./updateCartItem";
export { default as deleteCartItem } from "./deleteCartItem";
export { default as addCartItem } from "./addCartItem";

const initialState: ConfigState = {
    initialized: false,
    products: [],
    categories: [],
    cart: {
        items: {},
        totalAmount: 0,
        totalQuantity: 0,
        subTotal: 0,
        totalShipping: 0,
        orderProtectionAmount: 0,
        orderProtection: false,
        currentItemQuantity: 0,
        currentItemSubtotal: 0,
    },
}

export default initialState;