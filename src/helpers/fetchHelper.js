/* eslint-disable indent */
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

    setTimeout(() => controller.abort(), 15000);

    return fetch(endpoint, options)
        .then((res) =>
            res.ok
                ? res.json()
                : Promise.reject({
                      err: true,
                      status: res.status || "00",
                      statusText: res.statusText || "Fetch rejected",
                  })
        )
        .catch((err) => err);
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
