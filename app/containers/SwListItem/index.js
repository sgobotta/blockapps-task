import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCategory } from 'containers/TaskPage/selectors';
import SwListItem from './SwListItem';

export default connect(
  createStructuredSelector({
    category: makeSelectCategory()
  })
)(SwListItem);
