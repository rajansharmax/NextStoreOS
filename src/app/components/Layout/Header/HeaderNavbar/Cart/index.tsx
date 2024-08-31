import React, { useState } from 'react';
import { Badge, List, Image, Button, Empty } from 'antd';
import { CloseOutlined, MinusOutlined, PlusOutlined, UndoOutlined } from '@ant-design/icons';
import { CartIcon } from '../styled';
import {
    CartButton,
    CartLabel,
    CartItemContainer,
    StyledCartItem,
    CartItemDetails,
    CartItemTitle,
    CartItemPrice,
    CartFooter,
    ViewCartButton,
    DeleteIcon,
    StyledDrawer,
    QuantityControls,
    QuantityButton,
} from './styled';
import Link from 'next/link';
import routes from '@/config/routes';
import { useAppSelector, useAppDispatch } from '@/lib/hook';
import { CartItem } from '@/lib/redux/types';
import actions from '@/lib/redux/actions';

interface CartDropdownProps {
    label: boolean;
}

const CartDropdown = ({ label }: CartDropdownProps) => {
    const [visible, setVisible] = useState(false);
    const [deletedItem, setDeletedItem] = useState<CartItem | null>(null);
    const dispatch = useAppDispatch();

    const cart = useAppSelector((state) => state.config.cart);
    const allItems: CartItem[] = Object.values(cart.items);

    const showDrawer = () => {
        setVisible(true);
    };

    const closeDrawer = () => {
        setVisible(false);
    };

    const handleDeleteItem = (id: number) => {
        const itemToDelete = cart.items[id];
        if (itemToDelete) {
            setDeletedItem(itemToDelete);
            dispatch(actions.config.deleteCartItem(id));

            setTimeout(() => {
                setDeletedItem(null);
            }, 5000);
        }
    };

    const handleUndoDelete = () => {
        if (deletedItem) {
            dispatch(actions.config.addCartItem(deletedItem));
            setDeletedItem(null);
        }
    };

    const handleIncreaseQuantity = (id: number) => {
        const item = cart.items[id];
        if (item && item.quantity < 100000) {
            dispatch(actions.config.updateCartItem({ id, quantity: item.quantity + 1 }));
        }
    };

    const handleDecreaseQuantity = (id: number) => {
        const item = cart.items[id];
        if (item && item.quantity > 1) {
            dispatch(actions.config.updateCartItem({ id, quantity: item.quantity - 1 }));
        }
    };

    const subtotal: number = allItems.reduce((acc: number, item: CartItem) => acc + item.totalAmount, 0);

    return (
        <>
            <CartButton type="text" onClick={showDrawer}>
                <Badge count={allItems.length} offset={[10, 0]}>
                    <CartIcon />
                    {label && <CartLabel>Cart</CartLabel>}
                </Badge>
            </CartButton>
            <StyledDrawer
                title={
                    <>
                        <CartIcon /> {`${allItems.length} item${allItems.length > 1 ? 's' : ''}`}
                    </>
                }
                placement="right"
                onClose={closeDrawer}
                open={visible}
                width={450}
                closeIcon={<CloseOutlined />}
            >
                <List
                    dataSource={allItems}
                    locale={{
                        emptyText: (
                            <Empty
                                image={<CartIcon />}
                                description={<span>No items in the cart</span>}
                            />
                        ),
                    }}
                    renderItem={(item: CartItem) => (
                        <CartItemContainer key={item.id}>
                            <StyledCartItem>
                                <QuantityControls>
                                    <QuantityButton onClick={() => handleIncreaseQuantity(item.id)}>
                                        <PlusOutlined />
                                    </QuantityButton>
                                    <span>{item.quantity}</span>
                                    <QuantityButton onClick={() => handleDecreaseQuantity(item.id)}>
                                        <MinusOutlined />
                                    </QuantityButton>
                                </QuantityControls>
                                <Image src={item.product.image} alt={item.product.name} />
                                <CartItemDetails>
                                    <CartItemTitle>{item.product.name}</CartItemTitle>
                                    <CartItemPrice>
                                        ${item.unitAmount.toFixed(2)} x {item.quantity} = ${item.totalAmount.toFixed(2)}
                                    </CartItemPrice>
                                </CartItemDetails>
                                <DeleteIcon onClick={() => handleDeleteItem(item.id)} />
                            </StyledCartItem>
                        </CartItemContainer>
                    )}
                />
                <CartFooter>
                    {deletedItem && (
                        <ViewCartButton onClick={handleUndoDelete}>
                            <UndoOutlined /> Undo
                        </ViewCartButton>
                    )}
                    <Link href={routes.cart} passHref>
                        <ViewCartButton type="default" block>
                            View Cart (${subtotal.toFixed(2)})
                        </ViewCartButton>
                    </Link>
                </CartFooter>
            </StyledDrawer>
        </>
    );
};

export default CartDropdown;
