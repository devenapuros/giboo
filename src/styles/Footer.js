import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: grid;
    grid-template-columns: 25rem auto auto auto;
    gap: 1.5rem;
    margin-top: 2rem;
    color: ${({ theme }) => theme.textColor};
    padding: 4rem;
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
        grid-template-columns: 25rem auto auto auto;
    }

    @media screen and (min-width: 1200px) {
        grid-template-columns: 25rem auto auto auto;
    }
`;

export const FooterSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 30rem;
    padding: 1rem;
    h3 {
        font-weight: 600;
        font-size: 1.1rem;
    }
    ul {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }
    li,
    p,
    li a {
        font-size: 0.9rem;
        transition: all 300ms ease;
        color: ${({ theme }) => theme.textColorAlt};
    }

    li:hover,
    li:hover a {
        cursor: pointer;
        color: ${({ theme }) => theme.textColor};
        font-weight: 500;
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
