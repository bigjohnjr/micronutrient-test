export function fetchVitamins() {
  return dispatch => {
   return fetch("/users")
      .then(res => res.json())
      .then(micros => {
        return micros.vitamins;
      })
  };
}
