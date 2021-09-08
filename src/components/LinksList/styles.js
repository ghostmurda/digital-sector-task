import styled from "styled-components";
import { mainBlue, mainGray } from "../../App.styles";

export const LinksListWrapper = styled.div`
    flex: 1 auto;
    box-sizing: border-box;
    padding: 0 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
`;