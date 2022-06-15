import styled, { keyframes } from "styled-components";

const shadowEffect = keyframes`
    0% {
        filter: drop-shadow(3px 3px 10px #00a6fba0);
    }

    100% {
        filter: drop-shadow(3px 3px 10px #f72585a0);
    }
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundColorAlt};
    border: 1px solid ${({theme}) => theme.hoverColor};
    padding: 0 0.6rem 0 0.8rem;
    gap: 0.5rem;
    width: 100% !important;
    border-radius: 6px;
    transition: all 300ms ease;

    &:focus-within {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    .search-btn svg {
        fill: ${({ theme }) => theme.grayColor};
    }

    .search-btn:hover svg {
        fill: ${({ theme }) => theme.textColor};
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.9rem 0;
    border: 0;
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.textColorAlt};
`;
