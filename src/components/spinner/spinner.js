import React from 'react';
import styles from './spinner.module.css';
import spinner from '../../images/ajax-loader.gif';

export default () => (
  <div className={styles.container}><img src={spinner} alt="Loading..."/></div>
)