import styled from "styled-components";
import { mainBlue, mainGray, mainRed, mainTransition, mainWidth } from "../../App.styles";

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

export const SearchField = styled.input`
    box-sizing: border-box;
    height: 54px;
    width: 580px;
    font-family: Open Sans;
    font-style: normal;
    font-size: 14px;
    border: 1px solid ${props => props.isError ? mainRed : mainGray};
    border-radius: 7px;
    text-indent: 16px;
    outline: 0;
    transition: ${mainTransition};

    &:focus {
        border: 1px solid ${mainBlue};
    }
`;