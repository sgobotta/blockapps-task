/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_CATEGORY,
  LOAD_SWDATA, LOAD_SWDATA_SUCCESS, LOAD_SWDATA_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  category: '',
  userData: {
    swData: false,
  },
});

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return state.set('category', action.category);
    case LOAD_SWDATA:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'swData'], false);
    case LOAD_SWDATA_SUCCESS:
      return state
        .setIn(['userData', 'swData'], action.swData)
        .set('loading', false)
        .set('category', action.category);
    case LOAD_SWDATA_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default taskReducer;
