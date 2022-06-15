import { ImageContainer, Img } from "../styles/Image";

export const Image = ({ src, contWidth, contHeight, imgWidth, imgHeight }) => {
    return (
        <ImageContainer href="/" width={contWidth} height={contHeight}>
            <Img src={src} alt="" width={imgWidth} height={imgHeight} />
        </ImageContainer>
    );
};
