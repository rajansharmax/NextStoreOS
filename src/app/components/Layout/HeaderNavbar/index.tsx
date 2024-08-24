import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import { StyledButton, StyledHeader } from "./styled";

const { Header } = Layout;

interface HeaderProps {
  onClick: () => void;
  collapsed: boolean;
}

const HeaderNavbar = ({ onClick, collapsed }: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledButton
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={onClick}
        style={{
          fontSize: "16px",
        }}
      />
    </StyledHeader>
  );
};

export default HeaderNavbar;
