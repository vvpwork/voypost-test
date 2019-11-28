import axios from "axios";
import { ROOT } from "../configs/rootConfigs";

axios.defaults.baseURL = process.env.URL || ROOT.baseURL;

export const getAllTrips = () => {
  return axios.get("/allTrips");
};
