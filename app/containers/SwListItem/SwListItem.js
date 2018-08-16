/**
 * SwListItem
 *
 * Lists data of SW categories
 */

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';
import './style.scss';

export default class SwListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item, category } = this.props;
    // Put together the content of the repository
    const content = (
      <div className="sw-category-list-item">
        <span>{category}: </span>
        <a className="sw-category-list-sw-link" href={item.url} target="_blank" rel="noopener noreferrer">
          {item.name}
        </a>
      </div>
    );

    // Render the content into a list item
    return (
      <ListItem key={`repo-list-item-${item.name}`} item={content} />
    );
  }
}

SwListItem.propTypes = {
  item: PropTypes.object,
  category: PropTypes.string,
};
