import styled, { css } from "styled-components";

export const TransparentBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    border: 0;
    outline: none;
    background-color: transparent;
    transition: all 300ms ease;
    &:hover {
        cursor: pointer;
    }
    ${({ disabled }) =>
        disabled &&
        css`
            cursor: not-allowed !important;
            svg {
                fill: ${({ theme }) => theme.grayColor} !important;
            }
        `}
`;
