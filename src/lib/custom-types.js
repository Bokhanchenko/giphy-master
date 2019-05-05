import PropTypes from 'prop-types';

export const SearchResult = PropTypes.shape({
  full: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
});