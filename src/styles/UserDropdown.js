import styled from "styled-components";

export const DropdownContainer = styled.div`
    margin: 0;
    padding: 0;
    position: relative;
`;

export const UserMenu = styled.ul`
    position: absolute;
    flex-direction: column;
    gap: 0.4rem;
    top: 115%;
    right: 0;
    width: 13rem;
    display: ${({ visible }) => (visible ? "flex" : "none")};
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.backgroundColorAlt};
    border: 2px solid ${({ theme }) => theme.hoverColor};
    padding: 1rem;
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.shadow};
    li {
        margin: 0;
        padding: 0;
    }
`;
