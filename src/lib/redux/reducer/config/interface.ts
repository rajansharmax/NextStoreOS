export default interface ConfigState {
    initialized: boolean;
    products: ProductValue[]; 
    categories: CategoryValue[];
}

export interface ProductValue {
    label: string;
    value: string;
}

export interface CategoryValue {
    label: string;
    value: string;
}
