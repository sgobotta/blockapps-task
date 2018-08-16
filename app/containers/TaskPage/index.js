import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { changeCategory, loadSwData } from './actions';
import { makeSelectCategory, makeSelectSwData } from './selectors';
import reducer from './reducer';
import saga from './saga';
import TaskPage from './TaskPage';

const mapDispatchToProps = (dispatch) => ({
  onChangeCategory: (evt) => dispatch(changeCategory(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadSwData());
  }
});

const mapStateToProps = createStructuredSelector({
  swData: makeSelectSwData(),
  category: makeSelectCategory(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'task', reducer });
const withSaga = injectSaga({ key: 'task', saga });

export default compose(withReducer, withSaga, withConnect)(TaskPage);
export { mapDispatchToProps };
