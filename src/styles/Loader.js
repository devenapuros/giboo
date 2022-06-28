import styled, { keyframes } from "styled-components";

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const LoaderBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 300px;
    height: 200px;

    & .bar:nth-child(1) {
        /* background-color: ${({ theme }) => theme.pinkColor}; */
        animation-delay: 1s;
    }

    & .bar:nth-child(2) {
        /* background-color: purple; */
        animation-delay: 0.8s;
    }

    & .bar:nth-child(3) {
        /* background-color: #937DC2; */
        animation-delay: 0.6s;
    }

    & .bar:nth-child(4) {
        /* background-color: orange; */
        animation-delay: 0.4s;
    }

    & .bar:nth-child(5) {
        /* background-color: ${({ theme }) => theme.blueColor}; */
        animation-delay: 0.2s;
    }

    & .bar:nth-child(6) {
        /* background-color: ${({ theme }) => theme.blueColor}; */
        animation-delay: 0.2s;
    }

    & .bar:nth-child(7) {
        /* background-color: orange; */
        animation-delay: 0.4s;
    }

    & .bar:nth-child(8) {
        /* background-color: #937DC2; */
        animation-delay: 0.6s;
    }

    & .bar:nth-child(9) {
        /* background-color: purple; */
        animation-delay: 0.8s;
    }

    & .bar:nth-child(10) {
        /* background-color: ${({ theme }) => theme.pinkColor}; */
        animation-delay: 1s;
    }
`;

export const UpDown = keyframes`
    0%,
    100% {
        height: 8px;
        background-color: #f72585;
    }

    50% {
        height: 80px;
        background-color: #00a6fb;
    }
`;

export const LoaderBar = styled.div`
    width: 12px;
    height: 8px;
    border-radius: 10px;
    background-color: #f72585;
    animation: ${UpDown} 1.5s ease-in-out infinite;
`;
