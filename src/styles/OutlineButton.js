import styled, { css } from "styled-components";

export const OutlineBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ padding }) => padding || "0.5rem"};
    margin: ${({ margin }) => margin || "0"};
    width: ${({ width }) => width || "auto"};
    border: 0;
    gap: 0.4rem;
    outline: none;
    border: 2px solid ${({ theme }) => theme.hoverColor};
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColorAlt};
    border-radius: ${({ borderRadius }) => borderRadius || "8px"};
    transition: all 300ms ease;
    font-size: 1rem;
    font-weight: 500;
    svg {
        transform: scale(0.8);
        fill: ${({ theme }) => theme.textColorAlt};
    }
    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.textColor};
        background-color: ${({ theme }) => theme.hoverColor};
        svg {
            fill: ${({ theme }) => theme.textColor};
        }
    }
    ${({ theme, active }) =>
        active &&
        css`
            background-color: ${theme.textColor} !important;
            color: ${theme.backgroundColorAlt} !important;
        `}
`;
