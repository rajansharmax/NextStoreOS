import React, { useState } from "react";
import { StyledSearch, SearchWrapper, DropdownWrapper, DropdownItem } from "./styled";
import { useAppSelector } from "@/lib/hook";
import { useRouter } from 'next/navigation';
import { Product } from "@/lib/redux/types";

interface SearchInputProps {
    placeholder: string;
}

const SearchInput = ({ placeholder }: SearchInputProps) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [searchResults, setSearchResults] = useState<Product[]>([]);
    const products = useAppSelector((state) => state.config.products);
    const router = useRouter();

    const mockSearch = (query: string) => {
        return products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setInputValue(query);

        if (query.length > 0) {
            const results = mockSearch(query);
            setSearchResults(results);
            setDropdownVisible(true);
        } else {
            setSearchResults([]);
            setDropdownVisible(false);
        }
    };

    const handleItemClick = (item: Product) => {
        setInputValue(item.name);
        setDropdownVisible(false);
        router.push(`/shop/${item.slug}`);
    };

    const handleSearch = () => {
        router.push("/shop");
    }

    return (
        <SearchWrapper>
            <StyledSearch
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
                onSearch={handleSearch}
                size="large"
            />
            {dropdownVisible && searchResults.length > 0 && (
                <DropdownWrapper>
                    {searchResults.map((item, index) => (
                        <DropdownItem key={index} onClick={() => handleItemClick(item)}>
                            {item.name}
                        </DropdownItem>
                    ))}
                </DropdownWrapper>
            )}
        </SearchWrapper>
    );
};

export default SearchInput;
