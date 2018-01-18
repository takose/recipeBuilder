import React from 'react';
import { render } from 'react-dom';

export default class App extends React.Component {
  render() {
    return <p> Hello React!</p>;
  }
}

// eslint-disable-next-line no-undef
render(<App />, document.getElementById('app'));
