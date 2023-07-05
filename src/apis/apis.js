import axios from "axios";

const devApis = {
  USER_API: "http://localhost:5000/api/auth",
  SETUP_API: "http://localhost:5000/api/setup",
};

const getApiUrls = () => {
  const environment = process.env.APP_ENVIRONMENT;
  switch (environment) {
    case "dev":
      return devApis;
    default:
      return devApis;
  }
};

export const APIS = getApiUrls();

export const userApi = axios.create({
  baseURL: APIS.USER_API,
});
export const setupApi = axios.create({
  baseURL: APIS.SETUP_API,
});
