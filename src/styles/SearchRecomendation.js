import styled from "styled-components";

export const SearchRecomendationContainer = styled.button`
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.35rem 1.3rem;
    margin: 0;
    border: 2px solid ${({ theme }) => theme.hoverColor};
    color: ${({ theme }) => theme.textColorAlt};
    outline: none;
    font-size: 0.85rem;
    font-weight: 500;
    text-align: start;
    text-transform: capitalize;
    background-color: transparent;
    transition: all 300ms ease;
    border-radius: 8px;
    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.textColor};
        background-color: ${({ theme }) => theme.hoverColor};
    }
`;
