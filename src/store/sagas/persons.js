import { call, put, all } from "redux-saga/effects";
import { getPersonsSuccess, getPersonsFailure } from "../actions/persons";
import api, { apiCustomSearch, api_key } from "../../services/api";

export function* getPersons() {
  try {
    const params = [
      "/people/1",
      "/people/2",
      "/people/3",
      "/people/4",
      "/people/5",
      "/people/6",
    ];

    const data = yield all(params.map((p) => call(api.get, p)));

    const persons = yield data.reduce((acc, obj) => [...acc, obj.data], []);

    const imageResponse = yield all(
      persons.map((p) => {
        return call(
          apiCustomSearch,
          `?searchType=image&q=${p.name}&key=${api_key}&cx=014613627884587479518%3Alj9bueunjtj`
        );
      })
    );

    const personImages = imageResponse.reduce(
      (acc, item) => [...acc, item.data.items[0].link],
      []
    );

    const result = persons.reduce(
      (acc, person, idx) => [...acc, { ...person, image: personImages[idx] }],
      []
    );

    yield put(getPersonsSuccess(result));
  } catch (err) {
    console.log(err);
    yield put(getPersonsFailure("Error"));
  }
}
