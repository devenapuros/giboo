import { useEffect } from "react";

import { FocusedGifContainer, GifTitle } from "../styles/FocusedGifSection";
import { FocusedImage } from "./FocusedImage";
import { useFocusedGif } from "../hooks/useFocusedGif";
import { RectangleSkeleton } from "./RectangleSkeleton";
import { PrimaryButton } from "./PrimaryButton";
import { Row } from "./Layout/Row";
import confetti from "canvas-confetti";
import { useState } from "react";

export const FocusedGifSection = ({ id }) => {
    const [data, error, loading] = useFocusedGif(id);
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const copyLink = () => {
        navigator.clipboard.writeText(window.location);
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1200);
    };

    if (loading)
        return (
            <FocusedGifContainer>
                <Row gap="1rem" alignItems="center">
                    <RectangleSkeleton width="70%" height="1rem" />
                    <RectangleSkeleton width="10rem" height="2rem" />
                </Row>
                <RectangleSkeleton width="100%" height="15rem" />
            </FocusedGifContainer>
        );

    if (error) return <FocusedGifContainer>{error}</FocusedGifContainer>;
    else
        return (
            <FocusedGifContainer>
                <Row
                    justifyContent="space-between"
                    alignItems="center"
                    gap="1rem"
                >
                    <GifTitle>{data?.title}</GifTitle>
                    <PrimaryButton
                        label={isCopied ? "Link copied" : "Copy link"}
                        handleClick={copyLink}
                    />
                </Row>
                <FocusedImage
                    id={data?.id}
                    src={data?.images?.downsized_medium.url}
                    contHeight="fit-content"
                    contWidth="100%"
                    imgWidth="100%"
                    imgHeight="auto"
                />
            </FocusedGifContainer>
        );
};
