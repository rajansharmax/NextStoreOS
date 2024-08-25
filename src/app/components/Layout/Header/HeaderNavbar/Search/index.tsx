import React, { useState } from "react";
import { StyledSearch, SearchWrapper, StyledInput, DropdownWrapper, DropdownItem } from "./styled";

interface SearchInputProps {
    placeholder: string;
    onChange: (product: ProductValue | undefined) => void;
}

interface ProductValue {
    label: string;
    value: string;
}

const SearchInput = ({ placeholder, onChange }: SearchInputProps) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [searchResults, setSearchResults] = useState<ProductValue[]>([]);

    const mockSearch = (query: string) => {
        const items: ProductValue[] = [
            { label: "Electric Scooter", value: "electric-scooter" },
            { label: "Mobile Phone", value: "mobile-phone" },
            { label: "Electric Bike", value: "electric-bike" },
            { label: "Power Bank", value: "power-bank" },
            { label: "Headphones", value: "headphones" },
            { label: "Smart Watch", value: "smart-watch" },
            { label: "Laptop", value: "laptop" },
            { label: "Tablet", value: "tablet" },
            { label: "Wireless Charger", value: "wireless-charger" },
            { label: "Bluetooth Speaker", value: "bluetooth-speaker" },
        ];

        return items.filter(item =>
            item.label.toLowerCase().includes(query.toLowerCase())
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

    const handleItemClick = (item: ProductValue) => {
        setInputValue(item.label);
        setDropdownVisible(false);
        onChange(item);
    };

    return (
        <SearchWrapper>
            <StyledSearch
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
                size="large"
            />
            {dropdownVisible && searchResults.length > 0 && (
                <DropdownWrapper>
                    {searchResults.map((item, index) => (
                        <DropdownItem key={index} onClick={() => handleItemClick(item)}>
                            {item.label}
                        </DropdownItem>
                    ))}
                </DropdownWrapper>
            )}
        </SearchWrapper>
    );
};

export default SearchInput;
