import styled from 'styled-components';
import { Button, Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

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

export const CartItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
`;

export const CartItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const CartItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    flex-grow: 1;
`;

export const CartItemTitle = styled.div`
    font-weight: 500;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const CartItemPrice = styled.div`
    font-size: 14px;
    color: #25db4a;
    margin-top: 5px;
`;

export const CartFooter = styled.div`
    position: sticky;
    bottom: -1px;
    left: 0;
    width: 100%;
    background: #171717;
    padding: 16px;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.1);
`;

export const ViewCartButton = styled(Button)`
    background-color: #25db4a;
    color: #fff;
    margin-top: 10px;
    width: 100%;
    font-weight: 500;
    box-shadow: none;
    &:hover {
        background-color: #1aa83a;
        color: #fff;
    }
`;

export const DeleteIcon = styled(CloseOutlined)`
    cursor: pointer;
    color: #f5222d;
    font-size: 16px;
    &:hover {
        color: #ff4d4f;
    }
`;

export const StyledDrawer = styled(Drawer)`
    .ant-drawer-body{
        position: relative;
        padding: 0 24px;
        &::-webkit-scrollbar {
            width: 8px;
        }
    
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
    
        &::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 10px;
            border: 2px solid #f1f1f1;
        }
    
        &::-webkit-scrollbar-thumb:hover {
            background-color: #555;
        }
    }
`;