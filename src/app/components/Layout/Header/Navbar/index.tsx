import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  StyledButton,
  StyledHeader,
} from "./styled";
import CategoryDropdown from "./CategoryDropdown";

interface HeaderProps {
  onClick: () => void;
  collapsed: boolean;
}

const Navbar = ({ onClick, collapsed }: HeaderProps) => {
  return (
    <>
      <StyledHeader>
        <StyledButton
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onClick}
        >
          NeonLights
        </StyledButton>
        <CategoryDropdown/>
      </StyledHeader>
    </>
  );
};

export default Navbar;
