import { useRef } from "react";
import { Link } from "wouter";
import { useNearScreen } from "../hooks/useNearScreen";
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
    const imageRef = useRef();
    const isNearScreen = useNearScreen(imageRef, "500px");

    return (
        <Link href={`/gif/${id}`}>
            <ImageContainer
                ref={imageRef}
                width={contWidth}
                height={contHeight}
                hoverable={hoverable}
            >
                {isNearScreen && (
                    <Img
                        src={src}
                        width={imgWidth}
                        height={imgHeight}
                        alt={alt}
                        loading="lazy"
                    />
                )}
            </ImageContainer>
        </Link>
    );
};
