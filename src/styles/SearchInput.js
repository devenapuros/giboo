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
    background-color: white;
    padding: 0 0.4rem;
    gap: 0.5rem;
    width: 100% !important;
    border-radius: 6px;
    transition: filter 300ms ease;
    z-index: 3;

    &:focus-within {
        animation: ${shadowEffect} 7s alternate infinite;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.7rem;
    border: 0;
    outline: none;
    color: ${({ theme }) => theme.blackColor};
`;

export const InputButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    outline: none;
    height: 24px;
    width: 24px;
    background-color: transparent;
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
