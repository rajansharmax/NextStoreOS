import { products } from "@/assets/data/Products";
import { Category } from "@/lib/redux/types";

export const neonLightCategory: Category = {
    id: "cat001",
    name: "Neon Lights",
    slug: "neon-lights",
    products: [],
};

export const normalLightCategory: Category = {
    id: "cat002",
    name: "Normal Lights",
    slug: "normal-lights",
    products: [],
};

export const neonSignCategory: Category = {
    id: "cat003",
    name: "Neon Signs",
    slug: "neon-signs",
    products: [],
};

export const neonWallArtCategory: Category = {
    id: "cat004",
    name: "Neon Wall Art",
    slug: "neon-wall-art",
    products: [],
};

export const fairyLightsCategory: Category = {
    id: "cat005",
    name: "Fairy Lights",
    slug: "fairy-lights",
    products: [],
};

export const tableLampsCategory: Category = {
    id: "cat006",
    name: "Table Lamps",
    slug: "table-lamps",
    products: [],
};

export const categories: Category[] = [
    neonLightCategory,
    normalLightCategory,
    neonSignCategory,
    neonWallArtCategory,
    fairyLightsCategory,
    tableLampsCategory,
];

const assignProductsToCategories = () => {
    const categoryMap = categories.reduce((map, category) => {
        map[category.id] = category;
        return map;
    }, {} as { [key: string]: Category });

    products.forEach((product) => {
        const category = categoryMap[product.categoryId];
        if (category) {
            category.products.push(product);
        }
    });

    neonLightCategory.products = [
        ...neonSignCategory.products,
        ...neonWallArtCategory.products,
    ];

    normalLightCategory.products = [
        ...fairyLightsCategory.products,
        ...tableLampsCategory.products,
    ];
};

assignProductsToCategories();
