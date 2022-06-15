import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 75vh;
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
    width: 88vw;
    .slogan {
        width: 90%;
        line-height: 35px;
        font-size: 1.6rem;
        font-weight: 550;
        text-shadow: #000000 0px 0px 10px;
    }
`;
