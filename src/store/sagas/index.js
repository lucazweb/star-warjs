import { all, takeLatest } from "redux-saga/effects";
import { Types } from "../actions/actionTypes";
import { getPersons } from "./persons";

export default function* rootSaga() {
  yield all([takeLatest(Types.GET_PERSONS_REQUEST, getPersons)]);
}
