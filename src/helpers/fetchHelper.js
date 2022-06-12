import { fetchErrors } from "../constants/errors/errorCodes";

export const customFetch = (endpoint, options = {}) => {
    const defaultHeader = {
        accept: "application/json",
        "content-type": "application/json",
    };

    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || "GET";
    options.headers = options.headers
        ? { ...defaultHeader, ...options.headers }
        : defaultHeader;

    options.body = options.body ? JSON.stringify(options.body) : false;
    if (!options.body) delete options.body;

    setTimeout(() => controller.abort(), 5000);

    return fetch(endpoint, options)
        .then((res) =>
            res.ok ? res.json() : Promise.reject(fetchErrors.FETCH_REJECTED)
        )
        .catch((err) => {
            //!console.log(err);
            if (err.status && err.statusText) {
                throw err;
            } else {
                throw fetchErrors.SERVER_UNAVAILABLE;
            }
        });
};

export const get = (url, options = {}) => customFetch(url, options);

export const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
};

export const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
};

export const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
};
