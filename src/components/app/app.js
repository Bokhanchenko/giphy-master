import React from 'react';
import Navigation from '../navigation/navigation.container';
import Header from '../header/header';
import './global.css';
import GiphyDisplay from '../giphy-display/giphy-display';
import PropTypes from 'prop-types';
import { SearchResult } from "../../lib/custom-types";

const App = ({ children, giphyDisplayShown, giphyDisplayed, hideGiphyDisplay }) => {
  return (
    <div>
      <Header/>
      <Navigation/>
      {children}
      <GiphyDisplay
        isShown={giphyDisplayShown}
        onClick={hideGiphyDisplay}
        giphy={giphyDisplayed}
      />
    </div>
  )
};

App.propTypes = {
  giphyDisplayShown: PropTypes.bool.isRequired,
  giphyDisplayed: SearchResult,
  hideGiphyDisplay: PropTypes.func.isRequired,
};

export default App