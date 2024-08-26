import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Badge, List, Image } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { CartIcon } from '../styled';
import {
    CartButton,
    CartLabel,
    CartItemContainer,
    CartItem,
    CartItemDetails,
    CartItemTitle,
    CartItemPrice,
    CartFooter,
    ViewCartButton,
    DeleteIcon,
    StyledDrawer
} from "./styled";
import { ProductValue } from "@/lib/redux/reducer/config/interface";
import Link from 'next/link';
import routes from '@/config/routes';

interface CartDropdownProps {
    label: boolean;
}

const CartDropdown = ({ label }: CartDropdownProps) => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const closeDrawer = () => {
        setVisible(false);
    };

    const handleDeleteItem = (key: string) => {
        console.log(`Delete item with key: ${key}`);
    };

    const products = useSelector((state: any) => state.config.products);
    const subtotal = products.length * 39;

    return (
        <>
            <CartButton type="text" onClick={showDrawer}>
                <Badge count={products.length} offset={[10, 0]}>
                    <CartIcon />
                    {label && <CartLabel>Cart</CartLabel>}
                </Badge>
            </CartButton>
            <StyledDrawer
                title="Shopping Cart"
                placement="right"
                onClose={closeDrawer}
                open={visible}
                width={450}
                closeIcon={<CloseOutlined />}
            >
                <List
                    dataSource={products}
                    renderItem={(item: ProductValue) => (
                        <CartItemContainer key={item.value}>
                            <CartItem>
                                <Image src="https://via.placeholder.com/150" alt={item.label} />
                                <CartItemDetails>
                                    <CartItemTitle>{item.label}</CartItemTitle>
                                    <CartItemPrice>$39.00</CartItemPrice>
                                </CartItemDetails>
                                <DeleteIcon onClick={() => handleDeleteItem(item.value)} />
                            </CartItem>
                        </CartItemContainer>
                    )}
                />
                <CartFooter>
                    <div>Subtotal: ${subtotal.toFixed(2)}</div>
                    <Link href={routes.cart} passHref>
                        <ViewCartButton type="primary" block>
                            View Cart
                        </ViewCartButton>
                    </Link>
                </CartFooter>
            </StyledDrawer>
        </>
    );
};

export default CartDropdown;
