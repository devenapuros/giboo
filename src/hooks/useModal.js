import { useState } from "react";

export const useModal = () => {
    const [visible, setVisible] = useState(false);

    const Show = () => {
        setVisible(true);
        document.body.style.overflow = "hidden";
    };

    const Hide = () => {
        setVisible(false);
        document.body.style.overflow = "auto";
    };

    return { visible, Show, Hide };
};
