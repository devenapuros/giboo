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
    border: 2px solid ${({ theme }) => theme.hoverColor};
    border-top: 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.02) 0px 10px 10px -5px;
`;
