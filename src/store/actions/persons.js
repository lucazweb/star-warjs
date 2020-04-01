import { Types } from "./actionTypes";

export const getPersons = () => ({
  type: Types.GET_PERSONS_REQUEST,
});

export const getPersonsSuccess = (data) => ({
  type: Types.GET_PERSONS_SUCCESS,
  payload: data,
});

export const getPersonsFailure = (error) => ({
  type: Types.GET_PERSONS_FAILURE,
  payload: error,
});
