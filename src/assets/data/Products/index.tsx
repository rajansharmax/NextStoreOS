import { Product } from "@/lib/redux/types";

export const products: Product[] = [
    {
        id: "prod001",
        name: "Custom Neon Sign",
        slug: "custom-neon-sign",
        description: "A custom neon sign for home decor, personalized with any text or design.",
        price: 150.0,
        image: "https://picsum.photos/150",
        categoryId: "cat003",
    },
    {
        id: "prod002",
        name: "Neon Wall Art - Love",
        slug: "neon-wall-art-love",
        description: "A beautiful 'Love' neon sign perfect for bedrooms and living rooms.",
        price: 80.0,
        image: "https://picsum.photos/150g",
        categoryId: "cat004",
    },
    {
        id: "prod003",
        name: "String Fairy Lights",
        slug: "string-fairy-lights",
        description: "Battery-operated string fairy lights for indoor and outdoor decorations.",
        price: 20.0,
        image: "https://picsum.photos/150",
        categoryId: "cat005",
    },
    {
        id: "prod004",
        name: "Modern Table Lamp",
        slug: "modern-table-lamp",
        description: "A modern table lamp with adjustable brightness for your study or living room.",
        price: 50.0,
        image: "https://picsum.photos/150",
        categoryId: "cat006",
    },
];
