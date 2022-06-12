import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    color: ${({ theme }) => theme.textColor};
    padding: 1rem;
    background-color: ${({ theme }) => theme.blackColor};
`;

export const FooterSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 1rem;
`;
