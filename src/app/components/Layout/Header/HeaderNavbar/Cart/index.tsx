import React from 'react';
import { Dropdown, Badge, Menu } from 'antd';
import { CartIcon } from '../styled';
import type { MenuProps } from 'antd';
import { CartButton, CartLabel, ViewCartButton, DeleteIcon } from "./styled";
import { useRouter } from "next/navigation";


interface CartDropdownProps {
    label: boolean;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ label }) => {

    const router = useRouter();

    const handleDeleteItem = (key: string) => {
        console.log(`Delete item with key: ${key}`);
    };

    const onViewCart = () => {
        router.push('/cart');
    };

    const menuItems: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <>
                    Item 1
                    <DeleteIcon onClick={() => handleDeleteItem('1')} />
                </>
            ),
        },
        {
            key: '2',
            label: (
                <>
                    Item 2
                    <DeleteIcon onClick={() => handleDeleteItem('2')} />
                </>
            ),
        },
        {
            key: '3',
            label: (
                <>
                    Item 3
                    <DeleteIcon onClick={() => handleDeleteItem('3')} />
                </>
            ),
        },
        {
            type: 'divider' as const,
        },
        {
            key: 'view-cart',
            label: <ViewCartButton onClick={onViewCart}>View Cart</ViewCartButton>,
        },
    ];

    return (
        <Dropdown menu={{ items: menuItems }} placement="bottomRight" trigger={['click']}>
            <CartButton type="text">
                <Badge count={3} offset={[10, 0]}>
                    <CartIcon />
                    {label && <CartLabel>Cart</CartLabel>}
                </Badge>
            </CartButton>
        </Dropdown>
    );
};

export default CartDropdown;
