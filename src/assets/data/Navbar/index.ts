import routes from "@/config/routes";
import type { MenuProps } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  BulbOutlined,
  ClockCircleOutlined,
  LikeOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";
import React from "react";
type MenuItem = Required<MenuProps>["items"][number];

export const menuItems = [
  { label: 'Best Sellers', href: routes.bestSellers, icon: React.createElement(LikeOutlined) },
  { label: 'Order Samples', href: routes.orderSample, icon: React.createElement(BulbOutlined) },
  { label: 'My Account', href: routes.myAccount, icon: React.createElement(UserOutlined) },
  { label: 'Repeat Orders', href: routes.repeatOrders, icon: React.createElement(ClockCircleOutlined) },
];

export const items3: MenuItem[] = [
  {
    type: "divider",
  },
  {
    key: "my-account",
    label: "My Acount",
    icon: React.createElement(UserOutlined),
  },
  {
    key: "link-2",
    label: "Head Lights",
    icon: React.createElement(AppstoreOutlined),
  },
];

export const items: MenuItem[] = [
  {
    key: "overview",
    label: "Overview",
    type: "group",
    children: [
      { key: "home", label: "Home" },
      { key: "shop", label: "ShopNeon" },
    ],
  },
  {
    key: "categories",
    label: "Categories",
    icon: React.createElement(AppstoreOutlined),
    children: [
      {
        key: "g1",
        label: "Item 1",
        type: "group",
        children: [
          { key: "1", label: "Option 1" },
          { key: "2", label: "Option 2" },
        ],
      },
      {
        key: "g2",
        label: "Item 2",
        type: "group",
        children: [
          { key: "3", label: "Option 3" },
          { key: "4", label: "Option 4" },
        ],
      },
    ],
  },
  {
    key: "custom",
    label: "Custom Neon Sign",
    icon: React.createElement(AppstoreOutlined),
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          { key: "7", label: "Option 7" },
          { key: "8", label: "Option 8" },
        ],
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "grp",
    label: "Group",
    type: "group",
    children: [
      { key: "13", label: "Best Sellers" },
      { key: "14", label: "Contact Us" },
    ],
  },
];
