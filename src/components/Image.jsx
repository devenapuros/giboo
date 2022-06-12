import React from "react";
import { ImageContainer, Img } from "../styles/Image";

export const Image = ({ src, contWidth, contHeight, imgWidth, imgHeight }) => {
    return (
        <ImageContainer width={contWidth} height={contHeight}>
            <Img src={src} alt="" width={imgWidth} height={imgHeight} />
        </ImageContainer>
    );
};
