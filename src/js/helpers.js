import { TIMEOUT_SEC } from "./config";

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};

export const getJSON = async (url) => {
    try {
        const response = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
        const data = await response.json();

        if (!response.ok) throw new Error(`Sorry ${data.message} (${response.status})`);

        return data;

    } catch (error) {
        throw error;
    }
}