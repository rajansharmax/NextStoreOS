import styled from "styled-components";
import { Button, Layout } from "antd";
const { Header } = Layout;

export const StyledButton = styled(Button)`
  margin-left: 15px;
  border: 2px solid #19c73d;
  font-size: 16px;
`;

export const StyledHeader = styled(Header)`
  padding: 0;
  background-color: #25db4a;
  height: 45px;
  align-items: center;
  display: flex;
`;