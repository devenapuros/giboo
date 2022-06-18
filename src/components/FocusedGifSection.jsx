import React from "react";
import {
    ActionBtn,
    BtnGroup,
    DownloadBtn,
    FocusedGifContainer,
    GifTitle,
} from "../styles/FocusedGifSection";
import { FocusedImage } from "./FocusedImage";
import { useFocusedGif } from "../hooks/useFocusedGif";
import { RectangleSkeleton } from "./RectangleSkeleton";
import { HeartOutlineIcon } from "./Icons/HeartOutlineIcon";
import { DownloadIcon } from "./Icons/DownloadIcon";
import { QueueIcon } from "./Icons/QueueIcon";

export const FocusedGifSection = ({ id }) => {
    const [data, error, loading] = useFocusedGif(id);

    if (loading)
        return (
            <FocusedGifContainer>
                <RectangleSkeleton width="70%" height="0.8rem" />
                <RectangleSkeleton width="100%" height="14rem" />
                <BtnGroup>
                    <RectangleSkeleton width="49%" height="2.5rem" />
                    <RectangleSkeleton width="49%" height="2.5rem" />
                </BtnGroup>
                <RectangleSkeleton width="100%" height="2.5rem" />
            </FocusedGifContainer>
        );

    if (error) return <FocusedGifContainer>{error}</FocusedGifContainer>;
    else
        return (
            <FocusedGifContainer>
                <GifTitle>{data?.title}</GifTitle>
                <FocusedImage
                    id={data?.id}
                    src={data?.images?.original?.url}
                    contHeight="fit-content"
                    contWidth="100%"
                    imgWidth="100%"
                    imgHeight="auto"
                />
                <BtnGroup>
                    <ActionBtn>
                        <HeartOutlineIcon /> Add to favofites
                    </ActionBtn>
                    <ActionBtn>
                        <QueueIcon /> Collect
                    </ActionBtn>
                </BtnGroup>
                <DownloadBtn>
                    <DownloadIcon /> Download gif
                </DownloadBtn>
            </FocusedGifContainer>
        );
};
