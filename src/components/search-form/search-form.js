import React from 'react'
import PropTypes from 'prop-types'
import styles from './search-form.module.css'

export default function SearchFrom({ onSearchSubmitted }) {
  let searchField = null;
  const searchSubmitted = (e) => {
    e.preventDefault();
    onSearchSubmitted(searchField.value)
  };

  return (
    <div className={styles.container}>
      <form onSubmit={searchSubmitted} className={styles.formContainer}>
        <input
          className={styles.input}
          ref={(e) => searchField = e}
          type="text"
          placeholder="Find me Giphys..."
        />
        <input className={styles.button} type="submit" value="Search"/>
      </form>
    </div>
  )
}

SearchFrom.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired,
};