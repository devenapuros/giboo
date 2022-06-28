import styled from "styled-components";

export const SearchCompletionContainer = styled.div`
    position: absolute;
    display: ${({ visible }) => (visible ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    top: 100%;
    width: 100%;
    padding: 1rem 1.5rem 1.5rem 1.5rem;
    gap: 1.5rem;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.backgroundColorAlt};
    border: 1px solid ${({ theme }) => theme.hoverColor};
    border-top: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;
