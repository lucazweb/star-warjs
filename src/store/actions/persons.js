import { Types } from "./actionTypes";

export const getPersons = (data) => ({
  type: Types.GET_PERSONS_REQUEST,
  payload: data,
});

export const getPersonsSuccess = (data) => ({
  type: Types.GET_PERSONS_SUCCESS,
  payload: data,
});

export const getPersonsFailure = (error) => ({
  type: Types.GET_PERSONS_FAILURE,
  payload: error,
});

export const setCurrentPage = (data) => ({
  type: Types.SET_CURRENT_PAGE,
  payload: data,
});

export const selectPerson = (data) => ({
  type: Types.SELECT_PERSON,
  payload: data,
});

export const unselectPerson = () => ({
  type: Types.UNSELECT_PERSON,
});
