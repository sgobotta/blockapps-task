/**
 * Taskpage selectors
 */

import { createSelector } from 'reselect';

const selectTask = (state) => state.get('task');

const makeSelectCategory = () => createSelector(
  selectTask,
  (homeState) => homeState.get('category')
);

const makeSelectSwData = () => createSelector(
  selectTask,
  (taskState) => taskState.getIn(['userData', 'swData'])
);

export {
  selectTask,
  makeSelectCategory,
  makeSelectSwData,
};
