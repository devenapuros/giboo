/* eslint-disable indent */
import styled from "styled-components";

export const ModalBackground = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;
    display: ${({ visible }) => (visible ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    background-color: #000000c0;
    z-index: 4;
`;

export const ModalCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 90vw;
    background-color: ${({ theme }) => theme.backgroundColorAlt};
    border-radius: 8px;

    @media screen and (max-width: 600px) {
        width: 90vw;
    }

    @media screen and (min-width: 600px) {
        width: 70vw;
    }

    @media screen and (min-width: 768px) {
        width: 60vw;
    }

    @media screen and (min-width: 992px) {
        width: 43vw;
        .card-body {
            padding: 2rem;
        }
    }

    @media screen and (min-width: 1200px) {
        width: 35vw;
        .card-body {
            padding: 2.5rem;
        }
    }
`;

export const CloseModalBtn = styled.button`
    position: absolute;
    padding: 0;
    top: 0rem;
    right: -2rem;
    height: 26px;
    width: 26px;
    border: 0;
    outline: none;
    border-radius: 5px;
    background-color: transparent;
    svg {
        transition: all 300ms ease;
        fill: ${({ theme }) => theme.grayColor};
        transform: scale(1.2);
        &:hover {
            fill: ${({ theme }) => theme.whiteColor};
        }
    }
    &:hover {
        cursor: pointer;
    }
`;

export const ModalTabContainer = styled.header`
    display: flex;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.backgroundColor};
`;

export const CardBody = styled.div`
    padding: 1.5rem;
    gap: 1rem;
    display: ${({ visible }) => (visible ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
`;

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 0;
    gap: 0.8rem;

    .submit-btn {
        margin-top: 0.6rem;
    }
`;

export const SmallText = styled.small`
    color: ${({ theme }) => theme.grayColor};
    font-size: 0.8rem;
`;

export const LoginBrand = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    color: ${({ theme }) => theme.textColorAlt};
    h1 {
        font-size: 2.7rem;
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
