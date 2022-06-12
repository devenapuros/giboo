import styled from "styled-components";

export const RectSkeleton = styled.div`
    height: ${({ size }) => size || "3rem"};
    width: ${({ size }) => size || "3rem"};
    min-height: ${({ size }) => size || "3rem"};
    min-width: ${({ size }) => size || "3rem"};
    background-color: ${({ theme }) => theme.backgroundColorAlt};
    border-radius: 4px;
`;
