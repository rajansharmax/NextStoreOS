import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import styled from "styled-components";

export const CartButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    padding: 4px 19px 4px 6px;
`;

export const CartLabel = styled.label`
    vertical-align: middle;
`;

export const ViewCartButton = styled(Link)`
    width: 100%;
    text-align: center;
    background-color: #25db4a;
    color: #fff;
    &:hover {
        background-color: #25db4a;
        color: #fff;
    }
`;

export const DeleteIcon = styled(CloseOutlined)`
    float: right;
`;