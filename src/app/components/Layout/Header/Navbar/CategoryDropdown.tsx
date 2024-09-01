import { useAppSelector } from '@/lib/hook';
import { Dropdown, MenuProps } from 'antd';
import Link from 'next/link';
import React from 'react'
import { CategoryList, StyledButton } from './styled';
import { DownOutlined } from '@ant-design/icons';

const CategoryDropdown = () => {
    const categories = useAppSelector((state) => state.config.categories);

    const dropdownMenus = categories.map((category) => {
        const categoryItems: MenuProps["items"] = category.subcategories?.map((subcategory) => ({
            key: subcategory.id,
            label: (
                <Link href={`/${category.id}/${subcategory.id}`} passHref>
                    {subcategory.name}
                </Link>
            ),
            children: subcategory.products.map((product) => ({
                key: product.id,
                label: (
                    <Link href={`/${category.id}/${subcategory.id}/${product.id}`} passHref>
                        {product.name}
                    </Link>
                ),
            })),
        })) || [];

        return (
            <Dropdown key={category.id} menu={{ items: categoryItems }}>
                <CategoryList>
                    <StyledButton>
                        <Link href={`/category/${category.id}`}>
                            {category.name}
                            <DownOutlined />
                        </Link>
                    </StyledButton>
                </CategoryList>
            </Dropdown>
        );
    });

    return <>{dropdownMenus}</>;
}

export default CategoryDropdown