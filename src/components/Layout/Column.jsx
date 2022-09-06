import styled from "styled-components";

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({ width }) => width || "auto"};
    height: ${({ height }) => height || "auto"};
    margin: ${({ margin }) => margin || "0"};
    padding: ${({ padding }) => padding || "0"};
    justify-content: ${({ justifyContent }) => justifyContent || "inherit"};
    align-items: ${({ alignItems }) => alignItems || "inherit"};
    gap: ${({ gap }) => (gap ? gap : "0")};
    text-align: ${({ textAlign }) => textAlign || "inherit"};
`;
