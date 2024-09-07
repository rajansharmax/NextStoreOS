import { useAppSelector } from '@/lib/hook';
import { Dropdown, MenuProps } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import { CategoryList, CatergoryDropdownWrapper } from './styled';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const CategoryDropdown = () => {
    const categories = useAppSelector((state) => state.config.categories);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const handleDropdownVisibleChange = (visible: boolean, categoryId: string) => {
        setActiveDropdown(visible ? categoryId : null);
    };

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
            <Dropdown
                key={category.id}
                menu={{ items: categoryItems }}
                onOpenChange={(visible) => handleDropdownVisibleChange(visible, category.id)}
            >
                <CategoryList>
                    <Link href={`/category/${category.id}`}>
                        {category.name}
                    </Link>
                    {activeDropdown === category.id ? <UpOutlined /> : <DownOutlined />}
                </CategoryList>
            </Dropdown>
        );
    });

    return (
        <CatergoryDropdownWrapper>
            {dropdownMenus}
        </CatergoryDropdownWrapper>
    );
};

export default CategoryDropdown;