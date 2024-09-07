import React, { useState } from "react";
import { ShoppingCartOutlined, SearchOutlined, HeartOutlined, UserOutlined } from "@ant-design/icons";
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
import { menuItems } from '@/assets/data/Navbar';
import routes from "@/config/routes";
import { isMobile } from "react-device-detect";
import SearchInput from "./Search";
import CartDropdown from "./Cart";
import { julee } from "@/config/Fonts";
import Link from "next/link";

const HeaderNavbar = () => {
    const [showMobileSearch, setShowMobileSearch] = useState(false);

    const handleSearchIconClick = () => {
        setShowMobileSearch(!showMobileSearch);
    };

    return (
        <>
            <StyledHeader>
                <Logo
                    className={julee.className}
                    href={routes.home}>
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
                        <SearchOutlined />
                    </SearchIconWrapper>
                    <div>
                        <Link href={routes.wishlists}>
                            <HeartOutlined />
                        </Link>
                    </div>
                    <div>
                        <Link href={routes.myAccount}>
                            <UserOutlined />
                        </Link>
                    </div>
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