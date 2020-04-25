import { call, put, all } from "redux-saga/effects";
import {
  getPersons as getPersonsReq,
  getPersonsSuccess,
  getPersonsFailure,
  setCurrentPage,
} from "../actions/persons";

import api, { apiCustomSearch, api_key } from "../../services/api";

export function* getPersons(action) {

  const page = action.payload.page;

  try {
    const { data } = yield call(api.get, '/people', { params: {
      page,
    }});

    const { results } = data;

    const imageResponse = yield all(
      results.map((p) => {
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

    const persons = results.reduce(
      (acc, person, idx) => [...acc, { ...person, image: personImages[idx] }],
      []
    );

    persons.pop();

    yield put(setCurrentPage(page));
    yield put(getPersonsSuccess(persons));
  } catch (err) {
    // console.log(err);
    yield put(getPersonsFailure(`Oups, something wrong with page ${page}..`));
  }
}
