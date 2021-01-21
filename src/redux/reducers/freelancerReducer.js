import {
  FETCH_FREELANCER_BEGIN,
  FETCH_FREELANCER_SUCCESS,
  FETCH_FREELANCER_FAILURE,
} from '../actions/index';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function freelancerReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FREELANCER_BEGIN:

      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_FREELANCER_SUCCESS:

      return {
        ...state,
        loading: false,
        items: action.payload.freelancer,
      };

    case FETCH_FREELANCER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };
    default:
      return state;
  }
}
