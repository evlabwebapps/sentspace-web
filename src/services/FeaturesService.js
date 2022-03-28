
import http from "../http-common";


const createCalculationRequest = (sentences, configValues) =>
    http.post("/sentspace/requests/", { sentences: sentences, arguments: configValues });

const FeaturesService = {
    createCalculationRequest,
};

export default FeaturesService;
