import http from "../http-common";


const getConfig = () =>
    http.get("/sentspace/config/").then(response => response.data.reduce(
        (accumulator, current) => {
            return {
                ...accumulator,
                [current.key]: current.value
            }
        }, {}
    ));

const ConfigService = {
    getConfig,
};

export default ConfigService;
