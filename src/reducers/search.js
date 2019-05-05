import { SEARCH_SUCCESS, NEW_SEARCH, PERFORM_SEARCH, SEARCH_ERROR } from "../actions/search";
import { LOCATION_CHANGE } from 'react-router-redux';
import { SEARCH_LIMIT } from '../core/constants'

const initialState = {
  results: [],
  currentOffset: 0,
  searchTerm: null,
  isLoading: false,
  isActive: false,
  searchLimit: 100,
};

function searchResultTransformer(rawResults) {
  const { images } = rawResults;

  return {
    thumbnail: images.fixed_height_small_still.url,
    full: images.original.url,
  }
}

export default (state, action) => {
  if (!state) return initialState;

  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isActive: (action.results.length === SEARCH_LIMIT),
        currentOffset: state.currentOffset + SEARCH_LIMIT,
        results: state.results.concat(action.results.map(searchResultTransformer))
      };

    case NEW_SEARCH:
      return {
        ...state,
        results: [],
        currentOffset: 0,
        searchTerm: action.searchTerm,
      };

    case PERFORM_SEARCH:
      return {
        ...state,
        isLoading: true,
      };

    case SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
      };

    case LOCATION_CHANGE:
      return initialState;

    default: return state;
  }
}