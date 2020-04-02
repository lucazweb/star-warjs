import { call, put, all } from "redux-saga/effects";
import {
  getPersons as getPersonsReq,
  getPersonsSuccess,
  getPersonsFailure,
  setCurrentPage,
} from "../actions/persons";
import api, { apiCustomSearch, api_key } from "../../services/api";

export function* getPersons(action) {
  const request_data = [];
  const page = action.payload.page;
  const limit = action.payload.limit;

  const setOffset = (page, limit = 6) => {
    return (page - 1) * limit;
  };

  const offset = setOffset(page, limit);

  for (let i = offset + 1; i <= offset + limit; i++) {
    request_data.push(`/people/${i}`);
  }

  try {
    const data = yield all(
      request_data.map((p) => {
        try {
          return call(api.get, p);
        } catch (err) {
          return;
        }
      })
    );

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

    yield put(setCurrentPage(page));
    yield put(getPersonsSuccess(result));
  } catch (err) {
    // console.log(err);
    yield put(getPersonsFailure(`Oups, something wrong with page ${page}..`));

    yield put(
      getPersonsReq({
        page: page + 1,
        limit,
      })
    );

    yield put(setCurrentPage(page + 1));
  }
}
