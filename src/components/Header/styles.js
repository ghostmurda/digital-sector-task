import styled from "styled-components";
import { breakpointMobile, mainWidth } from "../../App.styles";

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
    flex: 0 180px;
    font-family: Open Sans;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 16px;

    @media (max-width: ${breakpointMobile}) {
        flex: 0 40px;
        span {
            display: none;
        }
    }
`;