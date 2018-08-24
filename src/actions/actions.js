export function fetchMicros() {
  return dispatch => {
   const url = "https://young-sierra-66594.herokuapp.com/users/";
   return fetch(url, {
     method: 'GET',
     mode: 'cors',
    })
    .then(handleErrors)
    .then(res => res.json())
    .then(micros => {
        dispatch(fetchVitamins(micros));
        console.log("micros", micros)
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
