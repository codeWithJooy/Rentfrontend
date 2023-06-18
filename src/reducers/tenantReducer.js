import { TENANT_ADDED } from "../actionTypes/tenantActionsType";

const initial = {
  tenants: [],
};

const tenantReducer = (state = initial, action) => {
  switch (action.type) {
    case TENANT_ADDED:
      return {
        ...state,
        tenants: [...state.tenants, action.payload],
      };
    default:
      return state;
  }
};

export default tenantReducer;
