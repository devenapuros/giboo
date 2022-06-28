import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 70vh;
    background: url("/public/pc.gif");
    background-position: 50% 50%;
    background-size: cover;
    color: ${({ theme }) => theme.whiteColor};
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
        line-height: 38px;
        font-size: 1.6rem;
        font-weight: 550;
        /* text-shadow: #000000 0px 0px 10px; */
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
            font-size: 2rem;
            font-weight: 550;
        }
    }

    @media screen and (min-width: 1200px) {
        width: 48vw;
        .slogan {
            width: 100%;
            font-size: 2rem;
            font-weight: 550;
        }
    }
`;
