import styled from "styled-components";

export const TransparentBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    border: 0;
    outline: none;
    background-color: transparent;
    transition: all 300ms ease;
    svg {
        transition: all 300ms ease;
        fill: ${({ theme }) => theme.grayColor};
    }
    &:hover {
        cursor: pointer;
        svg {
            fill: ${({ theme }) => theme.blackColor};
        }
    }
`;
