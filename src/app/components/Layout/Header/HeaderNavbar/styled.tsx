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
    line-height: 30px;
    .ant-input-wrapper {
        .ant-input-affix-wrapper {
            &:focus-within {
                box-shadow: none;
            }
        }
    }
`;

export const StyledLink = styled(Link)`
    color: #fff;
    vertical-align: middle;
`;

export const Logo = styled(Link)`
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
        padding: 0 20px;
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

export const SearchResultsList = styled.ul`
    position: absolute;
    top: 60px;
    width: 100%;
    max-width: 600px;
    max-height: 200px;
    overflow-y: auto;
    background-color: white;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 0;
    margin: 0;
    list-style-type: none;
    @media screen and (max-width: 1130px) {
        top: 115px;
    }
`;

export const SearchResultItem = styled.li`
    padding: 10px 16px;
    cursor: pointer;
    border-bottom: 1px solid #f0f0f0;
    &:last-child {
        border-bottom: none;
    }
    &:hover {
        background-color: #f5f5f5;
    }
    font-size: 16px;
    color: #333;
`;
