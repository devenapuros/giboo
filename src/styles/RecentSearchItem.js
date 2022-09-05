import styled from "styled-components";

export const SearchItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.8rem;
    align-items: center;
    transition: all 300ms ease;
    padding: 0.4rem 0.4rem 0.4rem 0.8rem;
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.hoverColor};
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.textColorAlt};
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: capitalize;
    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.hoverColor};
    }
`;
