import styled from "styled-components";
import { OutlineBtn } from "./OutlineButton";

export const SocialBtn = styled(OutlineBtn)`
    background-color: ${({ theme }) => theme.hoverColor};
    border-radius: 10px;
    &:hover {
        filter: brightness(1.2);
        transform: scale(1.03);
    }
`;
