export function fetchMicros() {
  return dispatch => {
   return fetch("/users")
      .then(handleErrors)
      .then(res => res.json())
      .then(micros => {
          dispatch(fetchVitamins(micros));
        }
      )};
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const RECEIVE_VITAMINS = 'RECEIVE_VITAMINS';

export function fetchVitamins(micros) {
  return {
    type: RECEIVE_VITAMINS,
    payload: micros
  }
}

export const updateActiveResultView = view => ({
  type: 'UPDATE_RESULT_VIEW',
  view,
});
