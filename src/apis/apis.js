import axios from "axios";

const devApis = {
  USER_API: "http://localhost:5000/api/auth",
  SETUP_API: "http://localhost:5000/api/setup",
  FLOOR_API: "http://localhost:5000/api/floor",
  ROOM_API: "http://localhost:5000/api/room",
  TENANT_API: "http://localhost:5000/api/tenant",
};
const prodApis = {
  USER_API: "http://18.220.185.71:5000/api/auth",
  SETUP_API: "http://18.220.185.71:5000/api/setup",
  FLOOR_API: "http://18.220.185.71:5000/api/floor",
  ROOM_API: "http://18.220.185.71:5000/api/room",
  TENANT_API: "http://18.220.185.71:5000/api/tenant",
};

const getApiUrls = () => {
  const environment = process.env.REACT_APP_ENV;
  console.log(environment);
  switch (environment) {
    case "dev":
      return devApis;
    case "prod":
      return prodApis;
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
export const floorApi = axios.create({
  baseURL: APIS.FLOOR_API,
});
export const roomApi = axios.create({
  baseURL: APIS.ROOM_API,
});
export const tenantApi = axios.create({
  baseURL: APIS.TENANT_API,
});
