import styled from "styled-components";
import { mainBlue, mainGray, mainTransition } from "../../App.styles";

export const GroupsWrapper = styled.div`
    max-width: 180px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const GroupsTitle = styled.span`
    font-family: Open Sans;
    font-size: 16px;
    width: 100%;
    margin-bottom: 16px;
    line-height: 34px;
    border-bottom: 1px solid ${mainGray};
`;

export const GroupItem = styled.div`
    padding: 6px;
    box-sizing: border-box;
    border-radius: 7px;
    margin-bottom: 16px;
    border: 1px solid ${props => props.isChoosed ? mainBlue : mainGray};
    transition: ${mainTransition};
    cursor: pointer;

    &:hover {
        border: 1px solid ${mainBlue};
    }
`;