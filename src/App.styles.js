import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
`;

export const
    mainBlue = '#4E74F5',
    hoverBlue = '#6485f5',
    activeBlue = '#3d5cc4',
    mainWidth = '992px',
    mainGray = '#E6E6E6',
    mainTransition = '0.3s',
    mainRed = '#F90043';