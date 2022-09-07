import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: grid;
    gap: 4rem;
    justify-content: center;
    margin-top: 3rem;
    color: ${({ theme }) => theme.textColor};
    padding: 3rem;
    background-color: ${({ theme }) => theme.backgroundColorAlt};

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 2.5rem;
    }

    @media screen and (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 3.5rem;
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 3.5rem;
    }

    @media screen and (min-width: 992px) {
        grid-template-columns: 350px auto auto auto;
    }

    @media screen and (min-width: 1200px) {
        grid-template-columns: 400px auto auto auto;
    }
`;

export const FooterSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: fit-content;

    h3 {
        font-weight: 600;
        font-size: 1.1rem;
    }
    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.2rem;
    }
`;

export const FooterBrand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    font-size: 0.9rem;
    font-weight: 600;
    background-color: ${({ theme }) => theme.hoverColor};
    color: ${({ theme }) => theme.textColor};
    a {
        color: ${({ theme }) => theme.purpleColor};
        &:hover {
            text-decoration: underline;
        }
    }
`;

export const FooterLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    color: ${({ theme }) => theme.textColorAlt};
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
    }
    .purple {
        color: #9772fb;
    }
    .deeppink {
        color: #f72585;
    }
    .orange {
        color: orange;
    }
    &:hover {
        cursor: pointer;
    }
`;

export const FooterLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.9rem;
    transition: all 300ms ease;
    color: ${({ theme }) => theme.textColor};
    svg {
        transform: scale(0.9);
        transition: all 300ms ease;
        fill: ${({ theme }) => theme.textColor};
    }
    &:hover {
        color: ${({ theme }) => theme.blueColor};
        svg {
            fill: ${({ theme }) => theme.blueColor};
        }
    }
`;
