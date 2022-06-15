import styled from "styled-components";

export const SearchCompletionContainer = styled.div`
    position: absolute;
    display: ${({ visible }) => (visible ? "flex" : "none")};
    top: 100%;
    width: 100%;
    padding: 1.5rem 1rem 1rem 1rem;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.backgroundColorAlt};
    border: 1px solid ${({ theme }) => theme.hoverColor};
    border-top: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;
