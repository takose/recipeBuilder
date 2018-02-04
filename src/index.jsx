import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
// import { Route, Switch } from 'react-router';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';
import { Switch, Route } from 'react-router';

import recipeBuilder from './reducers';
import App from './components/App';

const history = createHistory();
const middleware = routerMiddleware(history);


/* eslint-disable no-underscore-dangle */
const store = createStore(
  recipeBuilder,
  applyMiddleware(middleware),
);
/* eslint-enable */

const ConnectedSwitch = connect(state => ({
  location: state.location,
}))(Switch);

const AppContainer = () => (
  <ConnectedSwitch>
    <Route exact path="/" component={App} />
    <Route path="/about" component={App} />
  </ConnectedSwitch>
);

const Root = connect(state => ({
  location: state.location,
}))(AppContainer);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Root />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'), // eslint-disable-line no-undef
);
