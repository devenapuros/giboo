import styled, { keyframes } from "styled-components";

const shadowEffect = keyframes`
    0% {
        filter: drop-shadow(3px 3px 5px #00a6fb60);
    }

    100% {
        filter: drop-shadow(3px 3px 5px #f7258560);
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({ size }) => size || "500px"};
    width: fit-content;

    img {
        width: auto;
        height: 100%;
        animation: ${shadowEffect} 3s alternate infinite;
    }
`;
