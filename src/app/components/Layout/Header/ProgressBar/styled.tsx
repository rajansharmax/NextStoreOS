import { Progress } from "antd";
import styled from "styled-components";

export const StyledProgress = styled(Progress)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    transition: width 0.4s ease;
    font-size: 1px;
`;