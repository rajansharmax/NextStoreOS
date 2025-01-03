import styled from 'styled-components';
import { Button, Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

export const CartButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    padding: 0;
    padding-right: 9px;
    padding-left: 4px;
`;

export const CartLabel = styled.label`
    vertical-align: middle;
    font-size: 16px;
`;

export const CartItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #f0f0f0;
`;

export const StyledCartItem = styled.div`
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
    position: absolute;
    bottom: 0px;
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
    .ant-drawer-content{
        position: relative;
    }
    .ant-drawer-header {
        .ant-drawer-header-title {
            flex-direction: row-reverse;
            .ant-drawer-title{
                display: flex;
            }
        }
    }
    .ant-drawer-body {
        padding: 0 18px;

        .ant-image {
            width: 100px;
        }
        
        .ant-list-empty-text{
            margin-top: 150px;
            .ant-empty-image{
                height: auto;
                svg{
                    color: #ffffffcf;
                    font-size: 70px;
                }
            }
            .ant-empty-description{
                color: #fff;
            }
        }
    }
`;

export const QuantityControls = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 10px;
    span {
        margin: 2px;
    }
`;

export const QuantityButton = styled(Button)`
    margin: 0 5px;
    width: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    &:hover {
        background-color: #1aa83a;
    }
`;