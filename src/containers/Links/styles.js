import styled from "styled-components";
import { activeBlue, breakpointMobile, breakpointTablet, hoverBlue, mainBlue, mainTransition, mainWidth } from "../../App.styles";

export const LinksWrapper = styled.div`
    width: ${mainWidth};
    margin: 64px auto;
    height: 512px;
    box-sizing: border-box;
    display: flex;

    @media (max-width: ${breakpointTablet}) {
        width: 100%;
        padding: 16px;
    }

    @media (max-width: ${breakpointMobile}) {
        height: 100%;
        width: 100%;
        padding: 16px;
        flex-direction: column;
        margin: 0;
        margin-top: 16px;
    }
`;

export const Button = styled.button`
    min-width: 165px;
    box-sizing: border-box;
    height: 54px;
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