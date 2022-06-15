import styled from "styled-components";

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 3px;
    width: ${({ width }) => width || "3rem"};
    height: ${({ height }) => height || "3rem"};
    min-width: ${({ width }) => width || "3rem"};
    min-height: ${({ height }) => height || "3rem"};
    background-color: ${({ theme }) => theme.backgroundColorAlt};
    &:hover {
        cursor: pointer;
    }
`;

export const Img = styled.img`
    width: ${({ width }) => width || "3rem"};
    height: ${({ height }) => height || "3rem"};
    min-width: ${({ width }) => width || "3rem"};
    min-height: ${({ height }) => height || "3rem"};
`;
