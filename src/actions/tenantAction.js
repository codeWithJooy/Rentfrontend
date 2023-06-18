import { TENANT_ADDED } from "../actionTypes/tenantActionsType";

export const addTenant = (data) => {
  return {
    type: TENANT_ADDED,
    payload: data,
  };
};
