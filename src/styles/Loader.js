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
        background-color: purple;
        animation-delay: 1s;
    }

    & .bar:nth-child(2) {
        background-color: crimson;
        animation-delay: 0.8s;
    }

    & .bar:nth-child(3) {
        background-color: deeppink;
        animation-delay: 0.6s;
    }

    & .bar:nth-child(4) {
        background-color: orange;
        animation-delay: 0.4s;
    }

    & .bar:nth-child(5) {
        background-color: gold;
        animation-delay: 0.2s;
    }

    & .bar:nth-child(6) {
        background-color: gold;
        animation-delay: 0.2s;
    }

    & .bar:nth-child(7) {
        background-color: orange;
        animation-delay: 0.4s;
    }

    & .bar:nth-child(8) {
        background-color: deeppink;
        animation-delay: 0.6s;
    }

    & .bar:nth-child(9) {
        background-color: crimson;
        animation-delay: 0.8s;
    }

    & .bar:nth-child(10) {
        background-color: purple;
        animation-delay: 1s;
    }
`;

export const LoaderBar = styled.div`
    width: 12px;
    height: 8px;
    border-radius: 10px;
    background-color: #f72585;
`;
