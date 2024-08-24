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
    SearchIconWrapper
} from "./styled";
import { menuItems } from '../MenuItems';
import routes from "@/config/routes";

const HeaderNavbar = () => {
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchIconClick = () => {
        setShowSearch(!showSearch);
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
                    />
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
            {showSearch && (
                <MobileSearchWrapper>
                    <SearchInput
                        placeholder="Search for products, brands and more"
                        allowClear
                        enterButton
                        size="large"
                    />
                </MobileSearchWrapper>
            )}
        </>
    );
};

export default HeaderNavbar;