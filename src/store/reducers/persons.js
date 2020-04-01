import { Types } from "../actions/actionTypes";

const INITIAL_STATE = {
  loading: false,
  data: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_PERSONS_REQUEST:
      return { ...state, loading: true };

    case Types.GET_PERSONS_SUCCESS:
      return { data: action.payload, loading: false };

    case Types.GET_PERSONS_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
}
