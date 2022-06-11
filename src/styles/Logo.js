import styled, { keyframes } from "styled-components";

const shadowEffect = keyframes`
    0% {
        filter: drop-shadow(3px 3px 10px #00a6fb);
    }

    100% {
        filter: drop-shadow(3px 3px 10px #f72585);
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({ size }) => size || "500px"};

    img {
        width: auto;
        height: 100%;
        animation: ${shadowEffect} 3s alternate infinite;
    }
`;
