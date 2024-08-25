import React, { useState } from "react";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import {
    StyledHeader,
    StyledSearch,
    RightIcons,
    StyledLink,
    Logo,
    RightMobileIcons,
    MobileSearchWrapper,
    SearchIconWrapper,

} from "./styled";
import { menuItems } from '../MenuItems';
import routes from "@/config/routes";
import { isMobile } from "react-device-detect";
import SearchInput from "./Search";

const HeaderNavbar = () => {
    const [showMobileSearch, setShowMobileSearch] = useState(false);

    const handleSearchIconClick = () => {
        setShowMobileSearch(!showMobileSearch);
    };

    const handleProductChange = (product: any) => {
        if (product) {
            window.location.href = `/products/${product.value}`;
        }
    };

    return (
        <>
            <StyledHeader>
                <Logo href={routes.home}>
                    NeonLights
                </Logo>
                <StyledSearch>
                    <SearchInput
                        placeholder="Search for products, brands and more"
                        onChange={handleProductChange}
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
            {showMobileSearch && isMobile && (
                <>
                    <MobileSearchWrapper>
                        <SearchInput
                            placeholder="Search for products, brands and more"
                            onChange={handleProductChange}
                        />
                    </MobileSearchWrapper>
                </>
            )}
        </>
    );
};

export default HeaderNavbar;