import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    width: ${({ width }) => width || "auto"};
    height: ${({ height }) => height || "auto"};
    margin: ${({ margin }) => margin || "0"};
    padding: ${({ padding }) => padding || "0"};
    justify-content: ${({ justifyContent }) => justifyContent || "auto"};
    align-items: ${({ alignItems }) => alignItems || "auto"};
    gap: ${({ gap }) => (gap ? gap : "0")};
    text-align: ${({ textAlign }) => textAlign || "inherit"};
`;
