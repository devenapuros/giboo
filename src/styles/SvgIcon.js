import styled from "styled-components";
export const SvgIcon = styled.svg`
    fill: ${({ color, theme }) => theme[color] || "black"};
    transform: scale(${({ size }) => size || "1"});
    min-width: 24px;
    min-height: 24px;
`;
