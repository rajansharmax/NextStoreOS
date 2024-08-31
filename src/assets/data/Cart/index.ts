import { Cart } from "@/lib/redux/types";

export const cart: Cart = {
    items: {
        1: {
            id: 1,
            product: {
                id: "prod001",
                name: "Custom Neon Sign",
                slug: "custom-neon-sign",
                description: "A custom neon sign for home decor, personalized with any text or design.",
                price: 150.0,
                image: "https://picsum.photos/150",
                categoryId: "cat001",
            },
            quantity: 1,
            unitAmount: 150.0,
            totalAmount: 150.0,
        },
        2: {
            id: 2,
            product: {
                id: "prod002",
                name: "Neon Wall Art - Love",
                slug: "neon-wall-art-love",
                description: "A beautiful 'Love' neon sign perfect for bedrooms and living rooms.",
                price: 80.0,
                image: "https://picsum.photos/150",
                categoryId: "cat004",
            },
            quantity: 1,
            unitAmount: 80.0,
            totalAmount: 80.0,
        },
    },
    totalAmount: 230.0,
    totalQuantity: 2,
    subTotal: 230.0,
    totalShipping: 7.99,
    orderProtectionAmount: 2.82,
    orderProtection: true,
    currentItemQuantity: 1,
    currentItemSubtotal: 80.0
};
