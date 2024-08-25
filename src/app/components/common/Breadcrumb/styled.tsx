import { Breadcrumb } from "antd";
import { styled } from "styled-components";

export const StyledBreadcrumb = styled(Breadcrumb)`
  padding: 5px 25px;
  color: #25db4a;

  .ant-breadcrumb-separator,
  .ant-breadcrumb-link,
  .ant-breadcrumb-link > a {
    color: #25db4a;
    &:hover {
      color: #fff;
    }
  }
`;