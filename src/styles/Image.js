import styled from "styled-components";

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 5px;
    width: ${({ size }) => size || "3rem"};
    height: ${({ size }) => size || "3rem"};
`;

export const Img = styled.img`
    width: ${({ size }) => size || "3rem"};
    height: ${({ size }) => size || "3rem"};
`;
