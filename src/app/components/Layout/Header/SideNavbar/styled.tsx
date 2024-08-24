import styled from "styled-components";
import { Drawer } from "antd";
import Link from "next/link";

export const StyledDrawer = styled(Drawer)`

  .ant-drawer-header-title {
    flex-direction: row-reverse;
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  vertical-align: middle;
`;