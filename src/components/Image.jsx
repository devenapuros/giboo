import { Link } from "wouter";
import { ImageContainer, Img } from "../styles/Image";

export const Image = ({
    id,
    src,
    alt,
    contWidth,
    contHeight,
    imgWidth,
    imgHeight,
    hoverable,
}) => {
    return (
        <Link href={`/gif/${id}`}>
            <ImageContainer
                width={contWidth}
                height={contHeight}
                hoverable={hoverable}
            >
                <Img src={src} width={imgWidth} height={imgHeight} alt={alt} />
            </ImageContainer>
        </Link>
    );
};
