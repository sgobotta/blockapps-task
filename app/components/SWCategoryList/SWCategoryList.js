import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import SwListItem from 'containers/SwListItem';

const SWCategoryList = (props) => {
  const {
    loading, error, swData
  } = props;

  if (loading) {
    return <List component={LoadingIndicator} />;
  }
  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (swData !== false && swData) {
    return <List items={swData} component={SwListItem} />;
  }

  return null;
};

SWCategoryList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  swData: PropTypes.any,
};

export default SWCategoryList;
