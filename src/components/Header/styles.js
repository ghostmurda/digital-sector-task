import styled from "styled-components";
import { activeBlue, hoverBlue, mainBlue, mainGray, mainTransition, mainWidth } from "../../App.styles";

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

export const Button = styled.button`
    transition: all 0.3s;
    border-radius: 7px;
    color: #fff;
    background: ${mainBlue};
    font-size: 16px;
    outline: 0;
    padding: 16px;
    border: 0;
    cursor: pointer;
    font-family: Open Sans;
    transition: ${mainTransition};

    &:hover {
        background: ${hoverBlue};
    }

    &:active {
        background: ${activeBlue};
    }
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
    width: 256px;
    font-family: Open Sans;
    font-style: normal;
    font-size: 14px;
    border: ${props => props.isError ? '1px solid #F90043' : `1px solid ${mainGray}`};
    border-radius: 7px;
    text-indent: 16px;
    outline: 0;
    transition: ${mainTransition};

    &:focus {
        border: 1px solid ${mainBlue};
    }
`;