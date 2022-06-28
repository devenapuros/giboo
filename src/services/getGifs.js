import { get } from "../helpers/fetchHelper";

export const getGifs = async (keyword, limit = 25, offset = 0) => {
    

    let response = null;
    let error = null;
    let loading = true;
    try {
        // let response = await get(URL);
        // if (
        //     response.meta &&
        //     response.meta.status && (response.meta.status === 200)
        // ) {
        //     console.log("response:", response.data);
        //     response = response.data;
        // } else {
        //     console.log("error:", response);
        //     error = response;
        // }
        // loading = false;
    } catch (err) {
        console.log("error:", error);
        error = err;
    }
    return [response, error, loading];
};
