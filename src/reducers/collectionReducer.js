import {
  SET_ALL_COLLECTION,
  SET_TENANT_COLLECTION,
} from "../actionTypes/collectionType";

const initial = {
  tenantCollection: {},
  collections: [],
};

const collectionReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_TENANT_COLLECTION:
      return {
        ...state,
        tenantCollection: action.payload,
      };
    case SET_ALL_COLLECTION:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default collectionReducer;
