import React, { useState } from "react";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import {
    StyledHeader,
    StyledSearch,
    RightIcons,
    SearchInput,
    StyledLink,
    Logo,
    RightMobileIcons,
    MobileSearchWrapper,
    SearchIconWrapper,
    SearchResultsList,
    SearchResultItem,
} from "./styled";
import { menuItems } from '../MenuItems';
import routes from "@/config/routes";
import { isMobile } from "react-device-detect";

const HeaderNavbar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [showMobileSearch, setShowMobileSearch] = useState(false);

    const handleSearchIconClick = () => {
        setShowMobileSearch(!showMobileSearch);
    };

    const handleOnClick = () => {
        setShowSearch(false);
    };

    const handleSearchChange = (e: any) => {
        const query = e.target.value;
        setSearchQuery(query);

        // Simulate fetching search results (replace this with your actual data fetching logic)
        if (query.length > 0) {
            const results = mockSearch(query);
            setSearchResults(results);
            setShowSearch(true);
        } else {
            setSearchResults([]);
        }
    };

    // Mock function to simulate search results based on query
    const mockSearch = (query: string) => {
        const items = [
            "Electric Scooter",
            "Mobile Phone",
            "Electric Bike",
            "Power Bank",
            "Headphones",
            "Smart Watch",
            "Laptop",
            "Tablet",
            "Wireless Charger",
            "Bluetooth Speaker",
        ];
        return items.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
        );
    };

    return (
        <>
            <StyledHeader>
                <Logo>
                    NeonLights
                </Logo>
                <StyledSearch>
                    <SearchInput
                        placeholder="Search for products, brands and more"
                        allowClear
                        enterButton
                        size="large"
                        onChange={handleSearchChange}
                        onSearch={handleOnClick}
                        onBlur={() => setShowSearch(false)}
                        onFocus={() => {
                            if (searchQuery.length > 0) {
                                setShowSearch(true);
                            }
                        }}
                    />
                    {searchResults.length > 0 && showSearch && (
                        <SearchResultsList>
                            {searchResults.map((result, index) => (
                                <SearchResultItem key={index}>
                                    {result}
                                </SearchResultItem>
                            ))}
                        </SearchResultsList>
                    )}
                </StyledSearch>
                <RightIcons>
                    {menuItems.map(({ label, href, icon }, index) => (
                        <div key={index}>
                            <StyledLink href={href}>{icon}{label}</StyledLink>
                        </div>
                    ))}
                </RightIcons>
                <RightMobileIcons>
                    <SearchIconWrapper onClick={handleSearchIconClick}>
                        <SearchOutlined style={{ fontSize: '24px', marginRight: "5px" }} />
                    </SearchIconWrapper>
                    <div>
                        <StyledLink href={routes.cart}>
                            <ShoppingCartOutlined style={{ fontSize: '24px', marginRight: "5px" }} />
                        </StyledLink>
                    </div>
                </RightMobileIcons>
            </StyledHeader>
            {showMobileSearch && isMobile && (
                <>
                    <MobileSearchWrapper>
                        <SearchInput
                            placeholder="Search for products, brands and more"
                            allowClear
                            enterButton
                            size="large"
                            onChange={handleSearchChange}
                            onSearch={handleOnClick}
                            onBlur={() => setShowSearch(false)}
                            onFocus={() => {
                                if (searchQuery.length > 0) {
                                    setShowSearch(true);
                                }
                            }}
                        />
                        {searchResults.length > 0 && showSearch && (
                            <SearchResultsList>
                                {searchResults.map((result, index) => (
                                    <SearchResultItem key={index}>
                                        {result}
                                    </SearchResultItem>
                                ))}
                            </SearchResultsList>
                        )}
                    </MobileSearchWrapper>
                </>
            )}
        </>
    );
};

export default HeaderNavbar;