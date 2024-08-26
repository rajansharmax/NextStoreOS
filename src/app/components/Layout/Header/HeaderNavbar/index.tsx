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
import { menuItems } from '@/assets/data/Navbar/index';
import routes from "@/config/routes";
import { isMobile } from "react-device-detect";
import SearchInput from "./Search";
import CartDropdown from "./Cart";

const HeaderNavbar = () => {
    const [showMobileSearch, setShowMobileSearch] = useState(false);

    const handleSearchIconClick = () => {
        setShowMobileSearch(!showMobileSearch);
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
                    />
                </StyledSearch>
                <RightIcons>
                    {menuItems.map(({ label, href, icon }, index) => (
                        <div key={index}>
                            <StyledLink href={href}>{icon}{label}</StyledLink>
                        </div>
                    ))}
                    <div>
                        <CartDropdown label={true} />
                    </div>
                </RightIcons>
                <RightMobileIcons>
                    <SearchIconWrapper onClick={handleSearchIconClick}>
                        <SearchOutlined style={{ fontSize: '24px', marginRight: "5px" }} />
                    </SearchIconWrapper>
                    <div>
                        <CartDropdown label={false} />
                    </div>
                </RightMobileIcons>
            </StyledHeader>
            {showMobileSearch && isMobile && (
                <>
                    <MobileSearchWrapper>
                        <SearchInput
                            placeholder="Search for products, brands and more"
                        />
                    </MobileSearchWrapper>
                </>
            )}
        </>
    );
};

export default HeaderNavbar;