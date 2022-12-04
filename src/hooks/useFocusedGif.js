import { useState } from "react";
import { useEffect } from "react";
import { get } from "../helpers/fetchHelper";

export const useFocusedGif = (id) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                let URL = `https://api.giphy.com/v1/gifs/${id}?api_key=fiog0go38CpXMAgAlcG3BXMPNltyfBPv`;
                let response = await get(URL);
                if (
                    response.meta &&
                    response.meta.status &&
                    response.meta.status === 200
                ) {
                    console.log(response.data);
                    setData(response.data);
                    setError(false);
                } else {
                    //! console.log("error:", response);
                    setError(response);
                }
                setLoading(false);
            } catch (err) {
                //! console.log("error:", error);
                setError(err);
            }
        };
        if (id) fetchData();
        else setError("Missing id");
    }, [id]);

    return [data, error, loading];
};
