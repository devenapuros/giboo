import styled from "styled-components";

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({ size }) => size || "500px"};
    width: ${({ size }) => size || "500px"};
    min-width: ${({ size }) => size || "500px"};
    object-fit: contain;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.blueColor};
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
    }
`;
