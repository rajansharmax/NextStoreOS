import React, { useState } from "react";
import { Drawer, DrawerProps, RadioChangeEvent } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { StyledDrawer } from "./styled";

interface NavbarProps {
  onClose: () => void;
  collapsed: boolean;
}

const Navbar = ({ onClose, collapsed }: NavbarProps) => {
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
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </StyledDrawer>
  );
};

export default Navbar;
