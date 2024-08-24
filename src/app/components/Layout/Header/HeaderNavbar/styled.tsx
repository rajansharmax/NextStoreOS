import styled from "styled-components";
import { Button, Layout, Input } from "antd";
const { Header } = Layout;
const { Search } = Input;
import Link from 'next/link';

export const StyledButton = styled(Button)`
    margin-left: 15px;
    margin-right: 15px;
    border: 2px solid #171717;
    font-size: 16px;
`;

export const StyledHeader = styled(Header)`
    padding: 15px;
    background-color: #171717;
    align-items: center;
    display: flex;
    z-index: 999;
    line-height: 30px;
`;

export const StyledLink = styled(Link)`
    color: #fff;
    vertical-align: middle;
`;

export const Logo = styled.div`
    margin-right: 20px;
    margin-left: 20px;
    color: #fff;
    font-weight: bold;
    font-size: 24px;
`;

export const StyledMenu = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledSearch = styled.div`
    max-width: 600px;
    flex-grow: 1;
    
    @media screen and (max-width: 1130px) {
        display: none;
    }
`;

export const SearchInput = styled(Search)`
    vertical-align: middle;
`;

export const RightIcons = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    margin-right: 20px;
    margin-left: auto;

    @media screen and (max-width: 1130px) {
        display: none;
    }
    div {
        margin-left: 20px;
        cursor: pointer;

        @media screen and (max-width: 1000px) {
            margin-left: 5px;
        }
    }
`;

export const RightMobileIcons = styled.div`
    display: none;

    @media screen and (max-width: 1130px) {
        display: flex;
        margin-left: auto;
        margin-right: 20px;
        gap: 20px;
        align-items: center;
    }
`;

export const MobileSearchWrapper = styled.div`
    display: none;
    @media screen and (max-width: 1130px) {
        display: inline-block;
        padding: 0 30px;
        background-color: #171717;
    
        ${SearchInput} {
            width: 100%;
        }
    }
`;

export const SearchIconWrapper = styled.div`
    cursor: pointer;
    align-items: center;
`;