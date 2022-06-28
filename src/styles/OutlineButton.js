import styled from "styled-components";

export const OutlineBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ padding }) => padding || "0.35rem 0"};
    margin: ${({ margin }) => margin || "0"};
    width: ${({ width }) => width || "100%"};
    border: 0;
    gap: 0.3rem;
    outline: none;
    border: 1px solid ${({ theme }) => theme.hoverColor};
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColorAlt};
    border-radius: ${({ borderRadius }) => borderRadius || "5px"};
    transition: all 300ms ease;
    font-size: 0.82rem;
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
`;
