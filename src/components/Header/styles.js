import styled from "styled-components";
import { mainWidth } from "../../App.styles";

export const HeaderWrapper = styled.header`
    box-sizing: border-box;
    width: 100%;
    height: 84px;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeaderContainer = styled.div`
    height: 100%;
    width: ${mainWidth};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoWrapper = styled.div`
    height: 100%;
    width: 180px;
    font-family: Open Sans;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;