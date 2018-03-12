import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
// import { Route, Switch } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Switch, Route } from 'react-router';

import recipeBuilder from './reducers';
import App from './components/App';
import FF from './components/FF';
import Player from './components/Player';

const history = createHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

let storeEnhancer;

console.log(process.env.NODE_ENV); // FIXME
if (process.env.NODE_ENV === 'development') {
  storeEnhancer = composeEnhancers(applyMiddleware(routerMiddleware(history)));
} else {
  storeEnhancer = applyMiddleware(routerMiddleware(history));
}

/* eslint-disable no-underscore-dangle */
const store = createStore(
  recipeBuilder,
  storeEnhancer,
);
/* eslint-enable */

const ConnectedSwitch = connect(state => ({
  location: state.location,
}))(Switch);

const Root = () => (
  <ConnectedSwitch>
    <Route exact path="/" component={App} />
    <Route path="/ff" component={FF} />
    <Route path="/player" component={Player} />
  </ConnectedSwitch>
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'), // eslint-disable-line no-undef
);
