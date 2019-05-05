import { combineReducers } from 'redux';
import { createBrowserHistory } from "history";
import { connectRouter } from 'connected-react-router'
import searchReducer from './search';
import giphyDisplayReducer from './giphy-display'
import randomReducer from './random'

const history = createBrowserHistory();

export default combineReducers({
  router: connectRouter(history),
  giphyDisplay: giphyDisplayReducer,
  search: searchReducer,
  random: randomReducer,
});