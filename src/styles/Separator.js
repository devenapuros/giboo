import styled, { css } from "styled-components";

export const Separator = styled.div`
    display: flex;
    margin: ${({ margin }) => margin || "0"};
    ${({ type, theme, size }) =>
        type === "horizontal"
            ? css`
                  border-bottom: 1px solid ${theme.hoverColor};
                  width: ${size || "100%"};
              `
            : css`
                  border-left: 1px solid ${theme.hoverColor};
                  height: ${size || "100%"};
              `}
`;
