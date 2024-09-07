import styled from "styled-components";
import { token } from "@/lib/utils/AntdConfig";

export const HeaderTopBarWrapper = styled.div`
    background-color: #111;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    position: relative;
    column-gap: 10px;
    text-wrap: nowrap;
    @media screen and (max-width: 768px) {
        column-gap: 5px;
    }
`;

export const PromoText = styled.div`
    color: #e0e0e0;
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
    @media screen and (max-width: 620px) {
        font-size: 10px;
    }

    strong {
        font-weight: bold;
        color:${token.colorBgTextActive};
    }
`;

export const PromoBox = styled.div`
    background-color: white;
    display: inline-flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    gap: 8px;
    font-weight: 700;
    font-size: 13px;
    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
    @media screen and (max-width: 620px) {
        gap: 2px;
    }
    @media screen and (max-width: 350px) {
        font-size: 9px;
    }
`;

export const PriceText = styled.span`
    font-weight: bold;
    font-size: 18px;
    color:${token.colorBgTextActive};
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
    @media screen and (max-width: 620px) {
        font-size: 10px;
    }
`;

export const DiscountText = styled.span`
    font-size: 20px;
    color:${token.colorBgTextActive};
    margin-left: 10px;

    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
    @media screen and (max-width: 620px) {
        font-size: 10px;
        margin-left: 0;
    }

    strong {
        font-weight: bold;
    }

    div{
        font-size: 8px;
        margin-right: 6px;

        span{
            display: flex;
            flex-direction: column;
            align-items: center;
            color: ${token.colorBgTextActive};
            text-transform: uppercase;
        }
    }

`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
    transition: color 0.2s;
    position: absolute;
    top: 8px;
    right: 10px;
    padding: 0;

    @media screen and (max-width: 768px) {
        font-size: 23px;
    }
    @media screen and (max-width: 620px) {
        font-size: 20px;
        top: 5px;
    }

    &:hover {
        color: #333;
    }
`;