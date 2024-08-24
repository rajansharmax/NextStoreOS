import styled from "styled-components";
import { Layout, Flex, Row } from "antd";
import { Avatar, List, Form } from "antd";
import RCFooter from "rc-footer";
const { Footer } = Layout;

export const StyledRCFooter = styled(RCFooter)`
  .ant-form {
    display: flex;
    flex-wrap: nowrap !important;
  }
`;

export const FooterWrapper = styled(Footer)`
  background-color: rgb(0 0 0);
  .rc-footer-container {
    max-width: none;
    padding: 40px 0 20px;
  }
  .rc-footer-columns {
    /* display: flex; */
    .rc-footer-column {
      margin-bottom: 20px;
    }
  }
`;

export const StyledRow = styled(Row)``;

export const StyledList = styled(List)`
  .ant-list-item {
    border: 0;
    padding: 10px 0 0;
  }
  .ant-list-item-meta-avatar {
    margin: 0;
    margin-inline-end: 4px !important;
    .ant-avatar {
      width: 25px;
      height: 25px;
    }
  }
`;

export const StyledForm = styled(Form)`
  .ant-form-item {
    margin-inline-end: 2px;
  }
  .ant-form-item-control-input-content {
    button {
      margin-left: 5px;
      box-shadow: none;
    }
  }
  .ant-form-item-explain {
    position: absolute;
  }
`;

export const Title = styled.div`
  color: #fff;
  font-size: 20px;
  padding-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 12px;
`;