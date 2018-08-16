/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_SWDATA } from 'containers/TaskPage/constants';
import { swDataLoaded, swDataLoadingError } from 'containers/TaskPage/actions';

import request from 'utils/request';
import { makeSelectCategory } from 'containers/TaskPage/selectors';

/**
 * Github repos request/response handler
 */
export function* getSWData() {
  // Select username from store
  const category = yield select(makeSelectCategory());
  const requestURL = `https://swapi.co/api/${category}`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    const data = response.results;
    yield put(swDataLoaded(data, category));
  } catch (err) {
    yield put(swDataLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* swData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_SWDATA, getSWData);
}
