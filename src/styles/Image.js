import styled from "styled-components";

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 5px;
    width: ${({ width }) => width || "3rem"};
    height: ${({ height }) => height || "3rem"};
    min-width: ${({ width }) => width || "3rem"};
    min-height: 5rem;
    background-color: ${({ theme }) => theme.hoverColor};
    &:hover {
        cursor: ${({ hoverable }) => (hoverable ? "pointer" : "default")};
    }
`;

export const Img = styled.img`
    width: ${({ width }) => width || "3rem"};
    height: ${({ height }) => height || "3rem"};
    min-width: ${({ width }) => width || "3rem"};
    min-height: ${({ height }) => height || "3rem"};
`;
