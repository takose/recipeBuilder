import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import recipeBuilder from './reducers';
import App from './components/App';

const store = createStore(recipeBuilder);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'), // eslint-disable-line no-undef
);
