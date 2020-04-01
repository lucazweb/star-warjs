import { call, put, all } from "redux-saga/effects";
import { getPersonsSuccess, getPersonsFailure } from "../actions/persons";
import api, { apiCustomSearch, api_key } from "../../services/api";

export function* getPersons(action) {
  console.log(action);

  const request_data = [];
  const page = 1;
  const limit = 6;

  const setOffset = (page, limit) => {
    return (page - 1) * limit;
  };

  const offset = setOffset(page, limit);

  for (let i = offset + 1; i <= offset + limit; i++) {
    request_data.push(`/people/${i}`);
  }

  console.log(request_data);

  try {
    const data = yield all(request_data.map((p) => call(api.get, p)));

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
