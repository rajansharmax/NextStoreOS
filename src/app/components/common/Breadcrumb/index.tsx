import React from "react";
import { Breadcrumb, Dropdown, Menu } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { StyledBreadcrumb } from "./styled";

interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
}

interface BreadcrumbItem {
  title: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  menu?: { items: MenuItem[] };
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
    <StyledBreadcrumb
      items={breadcrumbItems}
    />
  );
};

export default BreadCrumb;
