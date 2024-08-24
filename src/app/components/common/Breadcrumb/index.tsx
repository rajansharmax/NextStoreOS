import React from "react";
import { Breadcrumb, Dropdown, Menu } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { StyledBreadcrumb } from "./styled"

interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
}

interface BreadcrumbItem {
  title: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  menu?: MenuItem[];
}

interface BreadCrumbProps {
  items: BreadcrumbItem[];
}

const BreadCrumb = ({ items }: BreadCrumbProps) => {

  const defaultItems: BreadcrumbItem[] = [
    {
      href: "/",
      title: <HomeOutlined />,
    },
  ];

  const breadcrumbItems = [...defaultItems, ...items];

  return (
    <StyledBreadcrumb>
      {breadcrumbItems.map((item, index) => {
        const breadcrumbContent = (
          <>
            {item.icon && item.icon}
            {item.title}
          </>
        );

        if (item.menu) {
          const menu = (
            <Menu>
              {item.menu.map((menuItem) => (
                <Menu.Item key={menuItem.key} icon={menuItem.icon}>
                  {menuItem.label}
                </Menu.Item>
              ))}
            </Menu>
          );

          return (
            <Breadcrumb.Item key={index} separator=">">
              <Dropdown overlay={menu}>
                <a href={item.href || "#"} onClick={(e) => e.preventDefault()}>
                  {breadcrumbContent}
                </a>
              </Dropdown>
            </Breadcrumb.Item>
          );
        }

        return (
          <Breadcrumb.Item key={index} href={item.href} separator=">">
            {breadcrumbContent}
          </Breadcrumb.Item>
        );
      })}
    </StyledBreadcrumb>
  );
};

export default BreadCrumb;
