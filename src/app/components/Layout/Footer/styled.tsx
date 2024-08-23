import styled from "styled-components";
import { Layout, Flex, Row } from "antd";
import { Avatar, List } from "antd";
const { Footer } = Layout;

export const FooterWrapper = styled(Footer)`
  background-color: rgb(13, 13, 13);
  h4 {
    color: #fff;
  }
`;

export const StyledRow = styled(Row)``;

export const StyledList = styled(List)`
  .ant-list-item {
    border: 0;
  }
  .ant-list-item-meta-avatar {
    margin: 0;
    margin-inline-end: 4px !important;
    .ant-avatar {
      width: 25px;
      height: 25px;
    }
  }
  .ant-list-item-meta-title > a {
    color: #fff !important;
    &:hover {
      color: #00ffa3 !important;
    }
  }
`;