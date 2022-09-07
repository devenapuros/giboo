import styled, { css } from "styled-components";

export const OutlineBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ padding }) => padding || "0.5rem"};
    margin: ${({ margin }) => margin || "0"};
    width: ${({ width }) => width || "auto"};
    height: fit-content;
    border: 0;
    gap: 0.5rem;
    outline: none;
    border: 2px solid ${({ theme }) => theme.hoverColor};
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.grayColor};
    border-radius: ${({ borderRadius }) => borderRadius || "8px"};
    transition: all 300ms ease;
    font-size: 1rem;
    font-weight: 500;
    svg {
        fill: ${({ theme }) => theme.grayColor};
    }
    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.textColorAlt};
        background-color: ${({ theme }) => theme.hoverColor};
        svg {
            fill: ${({ theme }) => theme.textColorAlt};
        }
    }
    ${({ theme, active }) =>
        active &&
        css`
            background-color: ${theme.textColor} !important;
            color: ${theme.backgroundColorAlt} !important;
        `}
`;
