import React from 'react';
import PropTypes from 'prop-types';
import style from './search-results.module.css'
import * as CustomTypes from '../../lib/custom-types';
import SearchResult from '../search-result/search-result';

export default function SearchResults({ results, searchResultClicked }) {
  return (
    <div className={style.container}>
      {
        results.map((result, index) =>
          <SearchResult
            result={result}
            key={index}
            onClick={searchResultClicked}
          />
      )}
    </div>
  )
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(CustomTypes.SearchResult),
  searchResultClicked: PropTypes.func.isRequired,
};
