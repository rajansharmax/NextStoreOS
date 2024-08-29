/* Products */
export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    image: string;
    category: Category;
}

/* Categories */
export interface Category {
    id: string;
    name: string;
    slug: string;
    products: Product[];
}

/* Cart */
export interface CartItems {
    product: Product;
    quantity: number;
    unitAmount: number;
    totalAmount: number;
}

export interface Cart {
    items: CartItems[];
}
