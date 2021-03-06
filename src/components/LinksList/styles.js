import styled from "styled-components";
import { breakpointMobile, breakpointTablet, mainBlue, mainGray } from "../../App.styles";

export const LinksListWrapper = styled.div`
    flex: 1 auto;
    box-sizing: border-box;
    padding: 0 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${breakpointMobile}) {
        align-items: flex-start;
        padding: 0;
        max-height: 232px;
        overflow-y: auto;
        margin-bottom: 16px;
    }

    @media (max-height: 570px) {
        max-height: 128px;
    }
`;

export const LinksTitle = styled.span`
    font-family: Open Sans;
    font-size: 16px;
    width: 180px;
    margin-bottom: 16px;
    line-height: 34px;
    border-bottom: 1px solid ${mainGray};
`;

export const LinkItem = styled.div`
    display: flex;
    flex-direction: column;
    height: 64px;
    margin-bottom: 32px;
    padding: 6px;
    box-sizing: border-box;
    border-radius: 7px;
    ${props => props.isSearched && `border: 1px solid ${mainBlue};`}

    @media (max-width: ${breakpointTablet}) {
        width: 100%;
    }

    a {
        max-width: 100%;
        display: block;
        white-space: nowrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
    }
`;

export const LinkItemTitle = styled.div`
    font-family: Open Sans;
    font-weight: bold;
    font-size: 1em;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
`;