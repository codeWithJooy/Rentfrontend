import {
  TENANT_ADDED,
  SET_TENANT,
  SET_SINGLE_TENANT,
} from "../actionTypes/tenantActionsType";

const initial = {
  tenants: [],
  singleTenant: {},
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
    case SET_SINGLE_TENANT:
      return {
        ...state,
        singleTenant: action.payload,
      };
    default:
      return state;
  }
};

export default tenantReducer;
