import {
  TENANT_ADDED,
  SET_TENANT,
  SET_SINGLE_TENANT,
  SET_TENANT_DETAILS,
} from "../actionTypes/tenantActionsType";

const initial = {
  tenants: [],
  singleTenant: {},
  selectedTenant: {},
  tenantDetails: {},
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
    case SET_SINGLE_TENANT:
      return {
        ...state,
        singleTenant: action.payload,
      };
    case SET_TENANT_DETAILS:
      return {
        ...state,
        tenantDetails: action.payload,
      }
    default:
      return state;
  }
};

export default tenantReducer;
