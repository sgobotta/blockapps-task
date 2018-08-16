/*
 * TaskPage
 *
 * List all the features
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import SwCategoryList from 'components/SWCategoryList';

export default class TaskPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function


  componentDidMount() {
    if (this.props.category && this.props.category.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, swData } = this.props;
    const swListProps = {
      loading,
      error,
      swData,
    };
    return (
      <div className="task-page">
        <Helmet>
          <title>SW Page</title>
          <meta
            name="description"
            content="Blockapps Task page"
          />
        </Helmet>
        <h1>Sw List</h1>
        <ul>
          <li>
            <p className="title">Get SW Info</p>
            <p>
              Task Description
            </p>
          </li>
        </ul>
        <form onSubmit={this.props.onSubmitForm}>
          <label htmlFor="category">
          Show SW categories by
            <input
              id="category"
              type="text"
              placeholder="planets"
              value={this.props.category}
              onChange={this.props.onChangeCategory}
            />
          </label>
        </form>
        <SwCategoryList {...swListProps} />
      </div>
    );
  }
}

TaskPage.propTypes = {
  category: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  swData: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool,
  onChangeCategory: PropTypes.func,
  onSubmitForm: PropTypes.func,
};
