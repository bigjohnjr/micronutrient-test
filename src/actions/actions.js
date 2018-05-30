export function fetchMicros() {
  return dispatch => {
   return fetch("/users")
      .then(handleErrors)
      .then(res => res.json())
      .then(micros => {
          dispatch(fetchVitamins(micros));
          dispatch(fetchMinerals(micros));
          dispatch(fetchAminos(micros));
          dispatch(fetchAntioxidants(micros));
          dispatch(fetchOmegas(micros));
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
export const RECEIVE_MINERALS = 'RECEIVE_MINERALS';
export const RECEIVE_AMINOS = 'RECEIVE_AMINOS';
export const RECEIVE_ANTIOXIDANTS = 'RECEIVE_ANTIOXIDANTS';
export const RECEIVE_OMEGAS = 'RECEIVE_OMEGAS';

export function fetchVitamins(micros) {
  return {
    type: "RECEIVE_VITAMINS",
    payload: micros.vitamins
  }
}

export function fetchMinerals(micros) {
  return {
    type: "RECEIVE_MINERALS",
    payload: micros.minerals
  }
}

export function fetchAminos(micros) {
  return {
    type: "RECEIVE_AMINOS",
    payload: micros.aminoacids
  }
}

export function fetchAntioxidants(micros) {
  return {
    type: "RECEIVE_ANTIOXIDANTS",
    payload: micros.antioxidants
  }
}

export function fetchOmegas(micros) {
  return {
    type: "RECEIVE_OMEGAS",
    payload: micros.omegas
  }
}
