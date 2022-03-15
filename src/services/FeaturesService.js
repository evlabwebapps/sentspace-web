
import http from "../http-common";


const createCalculationRequest = (sentences, configValues) =>
    http.post("/sentspace/requests/", { sentences: sentences, config: configValues });

const retrieveCalculationRequest = (requestId) =>
    http.get("/sentspace/requests/" + requestId);

const FeaturesService = {
    createCalculationRequest,
    retrieveCalculationRequest
};

export default FeaturesService;
