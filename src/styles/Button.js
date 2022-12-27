import styled from "styled-components";

export const PrimaryBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6rem 1.4rem;
    border: 0;
    outline: none;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    transition: all 300ms ease;
    gap: 0.4rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }
    background-color: ${({ theme }) => theme.blueColor};
    color: ${({ theme }) => theme.whiteColor};
    border: 2px solid ${({ theme }) => theme.blueColor};
    svg {
        transform: scale(0.9);
        fill: ${({ theme }) => theme.whiteColor};
    }
`;
