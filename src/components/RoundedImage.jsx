import { RoundedImageContainer, RoundedImg } from "../styles/RoundedImage";

export const RoundedImage = ({ src, size, alt }) => {
    return (
        <RoundedImageContainer size={size}>
            <RoundedImg src={src} alt={alt} />
        </RoundedImageContainer>
    );
};
