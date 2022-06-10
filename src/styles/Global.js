import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body,body * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        appearance: none;
        font-family: "Poppins", sans-serif;
    }

    body {
        background-color: #fafbfc !important; //TODO: Color del theme aqui
    }
`;
