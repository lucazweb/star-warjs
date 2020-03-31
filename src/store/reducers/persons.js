import { Types } from "../actions/actionTypes";

const INITIAL_STATE = {
  loading: false,
  persons: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_PERSONS_REQUEST:
      console.log(Types.GET_PERSONS_REQUEST);
      return { ...state, loading: true };

    default:
      return state;
  }
}
