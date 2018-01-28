import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import recipeBuilder from './reducers';
import App from './components/App';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  recipeBuilder,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'), // eslint-disable-line no-undef
);
