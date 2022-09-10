import styled from "styled-components";

export const MenuOptionButton = styled.a`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0.35rem 0.5rem;
    border-radius: 5px;
    border: 0;
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.textColorAlt};
    font-size: 0.93rem;
    transition: all 300ms ease;
    svg {
        transform: scale(0.85);
        fill: ${({ theme }) => theme.textColorAlt};
    }
    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.hoverColor};
    }
`;
