import store from "../store";
const { dispatch } = store;

export function dispatchAction(type, data) {
  dispatch({
    type: type,
    payload: data,
  });
}
export const getHeaders = (params) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (params) {
    headers.params = {
      ...headers.params,
      ...params,
    };
  }

  return headers;
};
