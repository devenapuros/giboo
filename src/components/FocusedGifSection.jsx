import React from "react";
import {
    BackLink,
    BtnGroup,
    FocusedGifContainer,
    GifDataSection,
    GifTitle,
} from "../styles/FocusedGifSection";
import { FocusedImage } from "./FocusedImage";
import { useFocusedGif } from "../hooks/useFocusedGif";
import { RectangleSkeleton } from "./RectangleSkeleton";
import { HeartOutlineIcon } from "./Icons/HeartOutlineIcon";
import { DownloadIcon } from "./Icons/DownloadIcon";
import { QueueIcon } from "./Icons/QueueIcon";
import { LeftArrowIcon } from "./Icons/LeftArrowIcon";
import { PrimaryButton } from "./PrimaryButton";
import { OutlineButton } from "./OutlineButton";

export const FocusedGifSection = ({ id }) => {
    const [data, error, loading] = useFocusedGif(id);

    if (loading)
        return (
            <FocusedGifContainer>
                <RectangleSkeleton width="70%" height="0.8rem" />
                <RectangleSkeleton width="100%" height="14rem" />

                <GifDataSection>
                    <RectangleSkeleton width="100%" height="1rem" />
                    <BtnGroup>
                        <RectangleSkeleton width="49%" height="2.5rem" />
                        <RectangleSkeleton width="49%" height="2.5rem" />
                    </BtnGroup>
                    <RectangleSkeleton width="49%" height="2.5rem" />
                </GifDataSection>
            </FocusedGifContainer>
        );

    if (error) return <FocusedGifContainer>{error}</FocusedGifContainer>;
    else
        return (
            <FocusedGifContainer className="hola">
                <BackLink onClick={() => window.history.back()}>
                    <LeftArrowIcon />
                    Go back
                </BackLink>
                <FocusedImage
                    id={data?.id}
                    src={data?.images?.original?.url}
                    contHeight="fit-content"
                    contWidth="100%"
                    imgWidth="100%"
                    imgHeight="auto"
                />
                <GifDataSection>
                    <GifTitle>{data?.title}</GifTitle>
                    <BtnGroup>
                        <OutlineButton
                            label="Add to favorites"
                            rightIcon={<HeartOutlineIcon />}
                        />
                        <OutlineButton
                            label="Collect"
                            rightIcon={<QueueIcon />}
                        />
                    </BtnGroup>
                    <PrimaryButton label="Download" icon={<DownloadIcon />} />
                </GifDataSection>
            </FocusedGifContainer>
        );
};
