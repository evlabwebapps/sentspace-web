import http from "../http-common";
import _ from 'lodash';


const getConfig = () =>
  http.get("/sentspace/config/").then(response => response.data.reduce(
    (accumulator, current) => {
      return {
        ...accumulator,
        [current.key]: current.value
      }
    }, {}
  ));

const getCheckboxes = () =>
  http.get("/sentspace/checkboxes/").then(response => _.groupBy(response.data, 'group'));

const ConfigService = {
  getConfig,
  getCheckboxes,
};

export default ConfigService;
