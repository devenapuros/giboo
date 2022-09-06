import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: fit-content;
    min-height: 550px;
    color: ${({ theme }) => theme.whiteColor};

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: url("/the-bay.jpg");
        background-position: 50% 20%;
        background-size: cover;
        filter: brightness(0.8);
    }
`;

export const AttributionText = styled.span`
    position: absolute;
    bottom: 3px;
    right: 2px;
    padding: 0.3rem;
    font-weight: 500;
    font-size: 0.88rem;
    color: #ccc;
    a {
        color: ${({ theme }) => theme.blueColor};
    }
    a:hover {
        text-decoration: underline;
    }
`;

export const SearchSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;

    .slogan {
        width: 100%;
        line-height: 50px;
        text-shadow: #00000090 0px 0px 30px;
        font-weight: 500;
    }

    @media screen and (max-width: 600px) {
        width: 88vw;
    }

    @media screen and (min-width: 600px) {
        width: 78vw;
    }

    @media screen and (min-width: 768px) {
        width: 68vw;
    }

    @media screen and (min-width: 992px) {
        width: 54vw;
        .slogan {
            width: 100%;
            font-size: 1.8rem;
        }
    }

    @media screen and (min-width: 1200px) {
        width: 48vw;
        .slogan {
            width: 100%;
            font-size: 2rem;
        }
    }
`;
