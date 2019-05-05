import 'babel-regenerator-runtime';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import { Router, Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';

import { createBrowserHistory } from 'history';

import App from './components/app/app.container';
import SearchPage from './components/pages/search/search.container';
import TrendingPage from './components/pages/trending/trending.container';
import RandomPage from './components/pages/random/random.container';
import Lifecycle from './components/pages/lifecycle/lifecycle'

import searchSaga from './sagas/search';
import randomSaga from './sagas/random';
import reducer from './reducers/index';

const sagas = createSagaMiddleware();
const history = createBrowserHistory();

const store = createStore(
  reducer,
  applyMiddleware(routerMiddleware(history), createLogger(), sagas)
);

sagas.run(searchSaga);
sagas.run(randomSaga);

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path="/" component={SearchPage}/>
        <Route exact path="/trending" component={TrendingPage}/>
        <Route exact path="/random" component={RandomPage}/>
        <Route exact path="/lifecycle" component={Lifecycle}/>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
