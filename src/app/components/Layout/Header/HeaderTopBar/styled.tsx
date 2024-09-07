import { Row } from "antd";
import { styled } from "styled-components";
import { token } from "@/lib/utils/AntdConfig";

export const HeaderTopBarWrapper = styled(Row)`
    justify-content: space-between;
    align-items: center;
    padding: 0 60px;
    height: 30px;
    border-bottom: 1px solid ${token.colorBorderSecondary};
`;