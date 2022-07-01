import styled, { css } from "styled-components";

export const InputContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundColorAlt};
    border: 1px solid
        ${({ theme, error }) => (error ? theme.redColor : theme.hoverColor)};
    padding: 0 0.6rem 0 0.8rem;
    gap: 0.5rem;
    width: 100% !important;
    border-radius: 6px;
    transition: all 300ms ease;
    z-index: 0;

    ${({ focus }) =>
        focus &&
        css`
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        `}

    .search-btn svg {
        fill: ${({ theme }) => theme.grayColor};
    }

    .search-btn:hover svg {
        fill: ${({ theme }) => theme.textColor};
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: ${({ padding }) => padding || "0.9rem 0"};
    border: 0;
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.textColorAlt};
    font-size: 1rem;
    font-weight: 500;
`;
