import { fetchFreelancerBegin, fetchFreelancerFailure, fetchFreelancerSuccess } from './index';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
function fetchFreelancer() {
  return (dispatch) => {
    dispatch(fetchFreelancerBegin());
    return fetch('https://pokeapi.co/api/v2/pokemon?offset=100&limit=6')
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchFreelancerSuccess(json.results));

        return json.results;
      })
      .catch((error) => dispatch(fetchFreelancerFailure(error)));
  };
}
export default fetchFreelancer;
