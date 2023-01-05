import styled, { css } from "styled-components";

export const TransparentBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    border: 0;
    outline: none;
    width: ${({ width }) => width || "100%"};
    background-color: transparent;
    transition: all 300ms ease;
    color: ${({ theme }) => theme.grayColor};
    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.textColorAlt};
    }
    ${({ disabled }) =>
        disabled &&
        css`
            cursor: not-allowed !important;
        `}
`;
