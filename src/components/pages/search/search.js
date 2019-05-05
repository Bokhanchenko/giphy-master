import React from 'react';
import PropTypes from 'prop-types';
import SearchFrom from '../../search-form/search-form';
import SearchResult from '../../search-results/search-results.container';
import InfiniteScroll from '../../infinite-scroll/infinite-scroll';

export default function Search({ onSearchSubmitted, onInfiniteScroll, isSearchLoading, isActive }) {
  return (
    <div>
      <SearchFrom onSearchSubmitted={onSearchSubmitted} />
      <InfiniteScroll isActive={isActive} isLoading={isSearchLoading} onTrigger={() => onInfiniteScroll()}>
        <SearchResult />
      </InfiniteScroll>
    </div>
  )
}

Search.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired,
  onInfiniteScroll: PropTypes.func.isRequired,
  isSearchLoading: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
};