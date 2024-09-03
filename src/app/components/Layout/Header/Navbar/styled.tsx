import styled from "styled-components";
import { Button, Layout, Input } from "antd";
const { Header } = Layout;

export const StyledButton = styled(Button)`
  margin-left: 15px;
  margin-right: 15px;
  border: 2px solid #25db4a;
  color:#25db4a;
  font-size: 16px;
`;

export const StyledHeader = styled(Header)`
  padding: 15px;
  background-color: #171717;
  align-items: center;
  display: flex;
  line-height: 20px;
`;

export const CategoryList = styled.div`
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: #25db4a;
    transform: translateY(-2px);
  }
  a{
    display: flex;
    column-gap: 3px;
  }
`;

export const CatergoryDropdownWrapper = styled.div`
  display: flex;
  column-gap: 50px;
  margin-inline-start: 60px;
`;