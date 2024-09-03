import { products } from "@/assets/data/Products";
import { Product, Category } from "@/lib/redux/types";

const alphabetsCustomNeonSignCategory: Category = {
    id: "subcat001",
    name: "Alphabets Custom Neon Sign",
    slug: "alphabets-custom-neon-sign",
    products: [], 
};

const wallHangingCustomNeonSignCategory: Category = {
    id: "subcat002",
    name: "Wall Hanging Custom Neon Sign",
    slug: "wall-hanging-custom-neon-sign",
    products: [],
};

const decorationCustomNeonSignCategory: Category = {
    id: "subcat003",
    name: "Decoration Custom Neon Sign",
    slug: "decoration-custom-neon-sign",
    products: [],
};

const giftCustomNeonSignCategory: Category = {
    id: "subcat004",
    name: "Gift Custom Neon Sign",
    slug: "gift-custom-neon-sign",
    products: [],
};


// Define subcategories for "Custom Size Neon Sign"
const alphabetsCustomSizeNeonSignCategory: Category = {
    id: "subcat005",
    name: "Alphabets Custom Size Neon Sign",
    slug: "alphabets-custom-size-neon-sign",
    products: [],
};

const wallHangingCustomSizeNeonSignCategory: Category = {
    id: "subcat006",
    name: "Wall Hanging Custom Size Neon Sign",
    slug: "wall-hanging-custom-size-neon-sign",
    products: [],
};

const decorationCustomSizeNeonSignCategory: Category = {
    id: "subcat007",
    name: "Decoration Custom Size Neon Sign",
    slug: "decoration-custom-size-neon-sign",
    products: [],
};

const giftCustomSizeNeonSignCategory: Category = {
    id: "subcat008",
    name: "Gift Custom Size Neon Sign",
    slug: "gift-custom-size-neon-sign",
    products: [],
};


const alphabetsPrepackedNeonSignCategory: Category = {
    id: "subcat009",
    name: "Alphabets Prepacked Neon Sign",
    slug: "alphabets-prepacked-neon-sign",
    products: [],
};

const wallHangingPrepackedNeonSignCategory: Category = {
    id: "subcat010",
    name: "Wall Hanging Prepacked Neon Sign",
    slug: "wall-hanging-prepacked-neon-sign",
    products: [],
};

const decorationPrepackedNeonSignCategory: Category = {
    id: "subcat011",
    name: "Decoration Prepacked Neon Sign",
    slug: "decoration-prepacked-neon-sign",
    products: [],
};

const giftPrepackedNeonSignCategory: Category = {
    id: "subcat012",
    name: "Gift Prepacked Neon Sign",
    slug: "gift-prepacked-neon-sign",
    products: [],
};

const abstractArtNeonSignCategory: Category = {
    id: "subcat013",
    name: "Abstract Art Neon Sign",
    slug: "abstract-art-neon-sign",
    products: [],
};

const geometricNeonSignCategory: Category = {
    id: "subcat014",
    name: "Geometric Neon Sign",
    slug: "geometric-neon-sign",
    products: [],
};

const vintageNeonSignCategory: Category = {
    id: "subcat015",
    name: "Vintage Neon Sign",
    slug: "vintage-neon-sign",
    products: [],
};

const modernNeonSignCategory: Category = {
    id: "subcat016",
    name: "Modern Neon Sign",
    slug: "modern-neon-sign",
    products: [],
};

const customNeonSignCategory: Category = {
    id: "cat001",
    name: "Custom Neon Sign",
    slug: "custom-neon-sign",
    products: [],
    subcategories: [
        alphabetsCustomNeonSignCategory,
        wallHangingCustomNeonSignCategory,
        decorationCustomNeonSignCategory,
        giftCustomNeonSignCategory,
    ],
};

const customSizeNeonSignCategory: Category = {
    id: "cat002",
    name: "Custom Size Neon Sign",
    slug: "custom-size-neon-sign",
    products: [],
    subcategories: [
        alphabetsCustomSizeNeonSignCategory,
        wallHangingCustomSizeNeonSignCategory,
        decorationCustomSizeNeonSignCategory,
        giftCustomSizeNeonSignCategory,
    ],
};

const prepackedNeonSignCategory: Category = {
    id: "cat003",
    name: "Prepacked Neon Sign",
    slug: "prepacked-neon-sign",
    products: [],
    subcategories: [
        alphabetsPrepackedNeonSignCategory,
        wallHangingPrepackedNeonSignCategory,
        decorationPrepackedNeonSignCategory,
        giftPrepackedNeonSignCategory,
    ],
};

const customModernNeonSignCategory: Category = {
    id: "cat004",
    name: "Custom Modern Neon Sign",
    slug: "custom-modern-neon-sign",
    products: [],
    subcategories: [
        abstractArtNeonSignCategory,
        geometricNeonSignCategory,
        vintageNeonSignCategory,
        modernNeonSignCategory,
    ],
}

const DieCutNeonSignCategory: Category = {
    id: "cat005",
    name: "Die Cut Neon Sign",
    slug: "die-cut-neon-sign",
    products: [],
    subcategories: [
        alphabetsCustomSizeNeonSignCategory,
        wallHangingCustomSizeNeonSignCategory,
        decorationCustomSizeNeonSignCategory,
        giftCustomSizeNeonSignCategory,
    ],
};

export const categories: Category[] = [
    customNeonSignCategory,
    customSizeNeonSignCategory,
    prepackedNeonSignCategory,
    customModernNeonSignCategory,
    DieCutNeonSignCategory,
];

const assignProductsToCategories = () => {
    const categoryMap = new Map<string, Category>();
    const subcategoryMap = new Map<string, Category>();

    // Populate the maps with category and subcategory IDs
    categories.forEach(category => {
        categoryMap.set(category.id, category);
        if (category.subcategories) {
            category.subcategories.forEach(subcategory => {
                subcategoryMap.set(subcategory.id, subcategory);
            });
        }
    });

    // Clear existing products in all categories and subcategories
    categories.forEach(category => {
        category.products = [];
        if (category.subcategories) {
            category.subcategories.forEach(subcategory => {
                subcategory.products = [];
            });
        }
    });

    // Assign products to categories and subcategories
    products.forEach(product => {
        const subcategory = subcategoryMap.get(product.subCategoryId);

        if (subcategory) {
            subcategory.products.push(product);
        }
    });

    // Aggregate products for each category from its subcategories
    categories.forEach(category => {
        category.products = category.subcategories?.reduce((acc, subcat) => {
            return acc.concat(subcat.products);
        }, [] as Product[]) || [];
    });

};

assignProductsToCategories();
