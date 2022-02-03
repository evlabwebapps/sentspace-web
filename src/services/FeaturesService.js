
import http from "../http-common";


const createCalculationRequest = (sentences, configValues) =>
    http.post("/sentspace/requests/", { sentences: sentences, config: configValues });

const FeaturesService = {
    createCalculationRequest,
};

export default FeaturesService;
