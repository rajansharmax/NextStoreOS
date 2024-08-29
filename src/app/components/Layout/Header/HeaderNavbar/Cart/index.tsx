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
import Link from 'next/link';
import routes from '@/config/routes';
import { useAppSelector } from '@/lib/hook';
import { Product } from '@/lib/redux/types';

interface CartDropdownProps {
    label: boolean;
}

const CartDropdown = ({ label }: CartDropdownProps) => {
    const [visible, setVisible] = useState(false);
    const products = useAppSelector((state) => state.config.products);

    const showDrawer = () => {
        setVisible(true);
    };

    const closeDrawer = () => {
        setVisible(false);
    };

    const handleDeleteItem = (key: string) => {
        console.log(`Delete item with key: ${key}`);
    };

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
                title={`Items`}
                placement="right"
                onClose={closeDrawer}
                open={visible}
                width={450}
                closeIcon={<CloseOutlined />}
            >
                <List
                    dataSource={products}
                    renderItem={(item: Product) => (
                        <CartItemContainer key={item.id}>
                            <CartItem>
                                <Image src="https://via.placeholder.com/150" alt={item.name} />
                                <CartItemDetails>
                                    <CartItemTitle>{item.name}</CartItemTitle>
                                    <CartItemPrice>$39.00</CartItemPrice>
                                </CartItemDetails>
                                <DeleteIcon onClick={() => handleDeleteItem(item.id)} />
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
