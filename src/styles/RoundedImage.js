import styled from "styled-components";

export const RoundedImageContainer = styled.div`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    min-width: ${({ size }) => size};
    min-height: ${({ size }) => size};
    border-radius: 100%;
    background-color: ${({ theme }) => theme.hoverColor};
    overflow: hidden;
`;

export const RoundedImg = styled.img`
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.grayColor};
    font-size: 0.7rem;
`;
