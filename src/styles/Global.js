import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body,body * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        appearance: none;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color: ${({ theme }) => theme.backgroundColor} !important;
        transition: all 300ms ease;
        color: ${({ theme }) => theme.textColor};
    }

    a {
        color: ${({ theme }) => theme.blueColor};
        &:hover {
            text-decoration: underline;
        }
    }

    .text-muted {
        color: ${({ theme }) => theme.grayColor};
    }

    .text-center {
        text-align: center;
    }
`;
