import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  StyledButton,
  StyledHeader,
} from "./styled";

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
      </StyledHeader>
    </>
  );
};

export default Navbar;
