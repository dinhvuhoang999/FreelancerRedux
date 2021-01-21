export const FETCH_FREELANCER_BEGIN = 'FETCH_FREELANCER_BEGIN';
export const FETCH_FREELANCER_SUCCESS = 'FETCH_FREELANCER_SUCCESS';
export const FETCH_FREELANCER_FAILURE = 'FETCH_FREELANCER_FAILURE';

export const fetchFreelancerBegin = () => ({
  type: FETCH_FREELANCER_BEGIN,
});

export const fetchFreelancerSuccess = (freelancer) => ({
  type: FETCH_FREELANCER_SUCCESS,
  payload: { freelancer },
});

export const fetchFreelancerFailure = (error) => ({
  type: FETCH_FREELANCER_FAILURE,
  payload: { error },
});
