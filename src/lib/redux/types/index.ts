/* Products */
export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    image: string;
    categoryId: string;
}

/* Categories */
export interface Category {
    id: string;
    name: string;
    slug: string;
    products: Product[];
}

/* Cart */
export interface CartItem {
    id: number;
    product: Product;
    quantity: number;
    unitAmount: number;
    totalAmount: number;
}

export interface Cart {
    items: { [key: number]: CartItem };
    totalAmount: number;
    totalQuantity: number;
    subTotal: number;
    totalShipping: number;
    orderProtectionAmount: number;
    orderProtection: boolean;
    currentItemQuantity: number;
    currentItemSubtotal: number;
}
