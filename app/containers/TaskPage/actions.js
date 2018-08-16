/*
 * Task Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_CATEGORY,
  LOAD_SWDATA, LOAD_SWDATA_SUCCESS, LOAD_SWDATA_ERROR
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {category} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_CATEGORY
 */
export function changeCategory(category) {
  return {
    type: CHANGE_CATEGORY,
    category
  };
}

export function loadSwData() {
  return {
    type: LOAD_SWDATA,
  };
}

export function swDataLoaded(swData, category) {
  return {
    type: LOAD_SWDATA_SUCCESS,
    swData,
    category,
  };
}

export function swDataLoadingError(error) {
  return {
    type: LOAD_SWDATA_ERROR,
    error,
  };
}
