import styled from "styled-components";
import { Drawer } from "antd";
import Link from "next/link";

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-header-title {
    flex-direction: row-reverse;
  }
  .ant-drawer-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .ant-menu {
      border-inline-end: none;
    }
  }
`;