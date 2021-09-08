import styled from "styled-components";
import { mainBlue, mainGray, mainTransition } from "../../App.styles";

export const SearchInputField = styled.input`
    box-sizing: border-box;
    height: 54px;
    width: 580px;
    font-family: Open Sans;
    font-style: normal;
    font-size: 14px;
    border: 1px solid ${mainGray};
    border-radius: 7px;
    text-indent: 16px;
    outline: 0;
    transition: ${mainTransition};

    &:focus {
        border: 1px solid ${mainBlue};
    }
`;