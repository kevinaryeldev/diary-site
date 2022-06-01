import axios from "axios";
import configs from "../config";

const api = axios.create({
  baseURL: configs.url,
});

export default api;
