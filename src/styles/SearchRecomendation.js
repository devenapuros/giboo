import styled from "styled-components";

export const SearchRecomendationContainer = styled.button`
    display: inline-block;
    padding: 0.35rem 1.3rem;
    margin: 0 0.4rem 0.4rem 0;
    border: 1px solid ${({ theme }) => theme.hoverColor};
    color: ${({ theme }) => theme.textColorAlt};
    outline: none;
    font-size: 0.85rem;
    font-weight: 500;
    text-align: start;
    text-transform: capitalize;
    background-color: ${({ theme }) => theme.backgroundColorAlt};
    transition: all 300ms ease;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.textColor};
        background-color: ${({ theme }) => theme.hoverColor};
    }
`;
