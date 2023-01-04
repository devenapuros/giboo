import styled, { css } from "styled-components";

export const TransparentLnk = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    border: 0;
    outline: none;
    width: ${({ width }) => width || "100%"};
    background-color: transparent;
    transition: all 300ms ease;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }
    ${({ disabled }) =>
        disabled &&
        css`
            cursor: not-allowed !important;
        `}
`;
