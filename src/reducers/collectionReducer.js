import {
  SET_ALL_COLLECTION,
  SET_TENANT_COLLECTION,
  SET_ALL_DISCOUNT,
  SET_TENANT_DISCOUNT,
  SET_RECEIPT_DATA,
} from "../actionTypes/collectionType";

const initial = {
  tenantCollection: {},
  collections: [],
  tenantDiscount: {},
  discounts: [],
  receipt: {},
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
    case SET_TENANT_DISCOUNT:
      return {
        ...state,
        tenantDiscount: action.payload,
      };
    case SET_ALL_DISCOUNT:
      return {
        ...state,
        discounts: action.payload,
      };
    case SET_RECEIPT_DATA:
      return {
        ...state,
        receipt: action.payload,
      };
    default:
      return state;
  }
};

export default collectionReducer;
