import { Cart, Category, Product } from "@/lib/redux/types";

export default interface ConfigState {
    initialized: boolean;
    products: Product[];
    categories: Category[];
    cart: Cart[];
}