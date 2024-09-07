import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  StyledButton,
  StyledHeader,
} from "./styled";
import CategoryDropdown from "./CategoryDropdown";
import useDeviceDetect from "@/lib/Hooks/useDeviceDetect";

interface HeaderProps {
  onClick: () => void;
  collapsed: boolean;
}

const Navbar = ({ onClick, collapsed }: HeaderProps) => {
  const isMobile = useDeviceDetect();

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
        {!isMobile && <CategoryDropdown />}
      </StyledHeader>
    </>
  );
};

export default Navbar;
