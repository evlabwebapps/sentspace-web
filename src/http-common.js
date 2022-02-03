import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + "/api",
  headers: {
    "content-type": "application/json",
    "accept": "application/json"
  }
});