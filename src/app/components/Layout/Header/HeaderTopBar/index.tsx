import React, { useState } from "react";
import {
    HeaderTopBarWrapper,
    PromoText,
    PromoBox,
    PriceText,
    DiscountText,
    CloseButton,
} from "./styled";
import useDeviceDetect from "@/lib/Hooks/useDeviceDetect";

const HeaderTopBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const isMobile = useDeviceDetect(461);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <HeaderTopBarWrapper>
            <PromoText>
                SHOP AND <strong>SAVE BIG</strong> {!isMobile && " ON LATEST PRODUCTS"}
            </PromoText>

            <PromoBox>
                <span>STARTING FROM</span>
                <PriceText>$55</PriceText>
            </PromoBox>

            <DiscountText>
                <div className="vertical-container">
                    <span>UP</span>
                    <span>TO</span>
                </div>
                <strong>30% OFF</strong>
            </DiscountText>

            <CloseButton onClick={handleClose}>&times;</CloseButton>
        </HeaderTopBarWrapper>
    );
};

export default HeaderTopBar;