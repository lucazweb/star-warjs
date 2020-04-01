import { Types } from "../actions/actionTypes";

const INITIAL_STATE = {
  loading: false,
  data: [],
  selected_person: null,
  page: 1,
  error: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_PERSONS_REQUEST:
      return { ...state, loading: true };

    case Types.GET_PERSONS_SUCCESS:
      return {
        ...state,
        error: null,
        data: action.payload,
        loading: false,
      };

    case Types.GET_PERSONS_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case Types.SET_CURRENT_PAGE:
      return { ...state, page: action.payload };

    case Types.SELECT_PERSON:
      return { ...state, selected_person: action.payload };

    case Types.UNSELECT_PERSON:
      return { ...state, selected_person: null };

    default:
      return state;
  }
}
