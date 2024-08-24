import React, { useState } from "react";
import { Drawer, DrawerProps, RadioChangeEvent } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { StyledDrawer } from "./styled";
import { menuItems } from "../MenuItems";
import { StyledLink } from "./styled";

interface NavbarProps {
  onClose: () => void;
  collapsed: boolean;
}

const SideNavbar = ({ onClose, collapsed }: NavbarProps) => {
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <StyledDrawer
      title="Neon Lights"
      placement={placement}
      closable={true}
      closeIcon={<CloseOutlined />}
      onClose={onClose}
      open={collapsed}
      key={placement}
    >
      {menuItems.map(({ label, href }, index) => (
        <div key={index}>
          <StyledLink href={href}>{label}</StyledLink>
        </div>
      ))}
    </StyledDrawer>
  );
};

export default SideNavbar;
