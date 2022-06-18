import styled from "styled-components";

export const RectSkeleton = styled.div`
    height: ${({ height }) => height || "3rem"};
    width: ${({ width }) => width || "3rem"};
    min-height: ${({ height }) => height || "3rem"};
    min-width: ${({ width }) => width || "3rem"};
    background-color: ${({ theme }) => theme.hoverColor};
    border-radius: 4px;
`;
