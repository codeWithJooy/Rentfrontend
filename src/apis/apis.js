import axios from "axios";

const devApis = {
  USER_API: "http://localhost:5000/api/auth",
  SETUP_API: "http://localhost:5000/api/setup",
  FLOOR_API: "http://localhost:5000/api/floor",
  ROOM_API: "http://localhost:5000/api/room",
  TENANT_API: "http://localhost:5000/api/tenant",
  EXPENSE_API: "http://localhost:5000/api/expense",
  FOOD_API: "http://localhost:5000/api/food",
  MEMBER_API: "http://localhost:5000/api/member",
  COLLECTION_API: "http://localhost:5000/api/collection",
  DUE_API: "http://localhost:5000/api/dues",
  SUMMARY_API: "http://localhost:5000/api/summary",
};
const prodApis = {
  USER_API: "https://rentpg.onrender.com/api/auth",
  SETUP_API: "https://rentpg.onrender.com/api/setup",
  FLOOR_API: "https://rentpg.onrender.com/api/floor",
  ROOM_API: "https://rentpg.onrender.com/api/room",
  TENANT_API: "https://rentpg.onrender.com/api/tenant",
  FOOD_API: "https://rentpg.onrender.com/api/food",
  MEMBER_API: "https://rentpg.onrender.com/api/member",
  COLLECTION_API: "https://rentpg.onrender.com/api/collection",
  DUE_API: "https://rentpg.onrender.com/api/dues",
  SUMMARY_API: "http://rentpg.onrender.com/api/summary",
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
export const expenseApi = axios.create({
  baseURL: APIS.EXPENSE_API,
});
export const foodApi = axios.create({
  baseURL: APIS.FOOD_API,
});
export const memberApi = axios.create({
  baseURL: APIS.MEMBER_API,
});
export const collectionApi = axios.create({
  baseURL: APIS.COLLECTION_API,
});
export const duesApi = axios.create({
  baseURL: APIS.DUE_API,
});
export const summaryApi = axios.create({
  baseURL: APIS.SUMMARY_API,
});
