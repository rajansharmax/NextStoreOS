import Search from "antd/es/input/Search";
import styled from "styled-components";

export const StyledSearch = styled(Search)`
    color: #25db4a;
    font-size: 16px;

    .ant-input-group-addon{
        button{
            background-color: #25db4a;
            color: #171717 !important;
            font-size: 14px;
            font-weight: 600;
            &:hover{
                color: #25db4a !important;
            }
            &:focus{
                color: #171717 !important;
                background-color: #25db4a !important;
            }
        }
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    width: 100%;

`;

export const StyledInput = styled(Search)`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
`;

export const DropdownWrapper = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    color: #25db4a;
    background-color: #171717;
    border: 1px solid #25db4a;
    border-top: none;
    z-index: 1000;
    max-height: 200px;
    overflow-y: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 8px 8px;
`;

export const DropdownItem = styled.div`
    padding: 8px 12px;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;