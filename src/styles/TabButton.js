/* eslint-disable indent*/
import styled from "styled-components";

export const TabBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    width: 100%;
    background-color: ${({ theme, active }) =>
        active ? theme.backgroundColorAlt : "transparent"};
    border: 0;
    outline: none;
    transition: all 300ms ease;
    color: ${({ theme, active }) =>
        active ? theme.textColor : theme.grayColor};
    font-weight: 600;
    &:hover {
        cursor: pointer;
        color: ${({ theme, active }) =>
            active ? theme.textColor : theme.textColorAlt};
    }
`;
