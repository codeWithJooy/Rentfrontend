import { TENANT_ADDED, SET_TENANT } from "../actionTypes/tenantActionsType";

const initial = {
  tenants: [],
  selectedTenant: {},
};

const tenantReducer = (state = initial, action) => {
  switch (action.type) {
    case TENANT_ADDED:
      return {
        ...state,
        tenants: [...state.tenants, action.payload],
      };
    case SET_TENANT:
      return {
        ...state,
        selectedTenant: action.payload,
      };
    default:
      return state;
  }
};

export default tenantReducer;
