import React, { useState } from "react";
import { Drawer, DrawerProps, RadioChangeEvent, Menu } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { StyledDrawer, StyledMenu } from "./styled";
import { items, items3 } from "@/assets/data/Navbar";
import type { MenuProps } from "antd";

interface NavbarProps {
  onClose: () => void;
  collapsed: boolean;
}

const SideNavbar = ({ onClose, collapsed }: NavbarProps) => {
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  const onClick: MenuProps["onClick"] = (e: any) => {
    console.log("click ", e);
  };

  return (
    <StyledDrawer
      title="Neon Lights"
      placement={placement}
      closable={true}
      closeIcon={<CloseOutlined />}
      width={288}
      onClose={onClose}
      open={collapsed}
      key={placement}
    >
      <StyledMenu
        onClick={onClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
      <StyledMenu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        items={items3}
      />
    </StyledDrawer>
  );
};

export default SideNavbar;
