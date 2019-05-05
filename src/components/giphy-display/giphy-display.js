import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './giphy-display.module.css';
import * as CustomTypes from '../../lib/custom-types';

export default function GiphyDisplay({ isShown, giphy, onClick }) {
  const containerClassNames = classnames(
    styles.container,
    { [styles.isShown]: isShown }
  );

  return (
    <div className={containerClassNames} onClick={onClick}>
      <img className={styles.image} src={giphy ? giphy.full : ''} />
    </div>
  )
}

GiphyDisplay.propTypes = {
  isShown: PropTypes.bool.isRequired,
  giphy: CustomTypes.SearchResult,
  onClick: PropTypes.func.isRequired,
};