import styled from "styled-components";
import { activeBlue, mainBlue, mainGray, mainRed, mainTransition } from "../../App.styles";

export const modalWindowStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export const FormWrapper = styled.div`
    width: 256px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    box-sizing: border-box;

    select {
        width: 100%;
        height: 54px;
        box-sizing: border-box;
        font-family: Open Sans;
        font-style: normal;
        font-size: 14px;
        border-radius: 7px;
        outline: 0;
        margin-bottom: 16px;
        text-indent: 16px;
        border: 1px solid ${mainGray};
    }
`;

export const InputField = styled.input`
    width: 100%;
    height: 54px;
    box-sizing: border-box;
    font-family: Open Sans;
    font-style: normal;
    font-size: 14px;
    border: 1px solid${props => props.isError ? mainRed : mainGray};
    border-radius: 7px;
    text-indent: 16px;
    outline: 0;
    margin-bottom: 16px;
    transition: ${mainTransition};

    &:focus {
        border: 1px solid ${mainBlue};
    }
`;

export const FormTitle = styled.div`
    font-family: Open Sans;
    font-size: 16px;
    text-align: center;
    margin-bottom: 32px;
    width: 100%;
`;

export const FormButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const FormButton = styled.button`
    height: 54px;
    transition: all ${mainTransition};
    border: 1px solid ${mainGray} !important;
    border-radius: 7px;
    background: white;
    font-size: 16px;
    outline: 0;
    padding: 16px;
    border: 0;
    cursor: pointer;
    font-family: Open Sans;
    transition: ${mainTransition};

    &:hover {
        border: 1px solid ${mainBlue} !important;
    }

    &:active {
        border: 1px solid ${activeBlue} !important;
    }
`;