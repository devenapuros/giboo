/* eslint-disable indent */
import styled from "styled-components";
import { PrimaryBtn } from "./Button";

export const ModalBackground = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;
    display: ${({ visible }) => (visible ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    background-color: #000000c0;
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

export const CloseModalBtn = styled(PrimaryBtn)`
    position: absolute;
    padding: 0;
    top: 0rem;
    right: -2rem;
    height: 26px;
    width: 26px;
    border-radius: 5px;
    svg {
        fill: ${({ theme }) => theme.whiteColor};
        transform: scale(0.9);
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

export const LoginWithGoogleBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    padding: 0.35rem;
    width: 100%;
    border-radius: 5px;
    border: 0;
    outline: none;
    color: ${({ theme }) => theme.grayColor};
    border: 1px solid ${({ theme }) => theme.hoverColor};
    font-size: 0.82rem;
    font-weight: 550;
    transition: all 300ms ease;
    svg {
        transform: scale(0.85);
    }
    &:hover {
        cursor: pointer;
    }
`;
