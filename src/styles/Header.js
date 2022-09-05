import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 75vh;
    color: ${({ theme }) => theme.whiteColor};

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: url("/truck.jpg");
        background-position: 0% 20%;
        background-size: cover;
        /* filter: brightness(0.95); */
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
        line-height: 45px;
        text-shadow: #000000a0 0px 0px 15px;
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
            font-size: 2.2rem;
            font-weight: 600;
        }
    }
`;
