import store from "../store";
const { dispatch } = store;

export function dispatchAction(type, data) {
  dispatch({
    type: type,
    payload: data,
  });
}
