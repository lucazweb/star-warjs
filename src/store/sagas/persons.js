import { call, put, all } from "redux-saga/effects";
import { getPersonsSuccess, getPersonsFailure } from "../actions/persons";
import api, { apiCustomSearch, getPersonImage } from "../../services/api";

export function* getPersons(action) {
  try {
    const params = ["/people/1", "/people/2", "/people/3"];

    const data = yield all(params.map((p) => call(api.get, p)));

    const persons = yield data.reduce((acc, obj) => [...acc, obj.data], []);

    // const persons_full = yield all(data.reduce((acc, obj) => {
    //   return [
    //     ...acc,
    //     [obj.data, call(apiCustomSearch, "", { params: { q: "Luke" } })],
    //   ];
    // }, []));

    // console.log("persons_full", persons_full);

    yield put(getPersonsSuccess(persons));
  } catch (err) {
    console.log(err);
    yield put(getPersonsFailure("Error"));
  }
}
