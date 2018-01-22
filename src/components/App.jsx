import 'normalize.css';
import React from 'react';
import IngredientList from '../containers/IngredientList'
import StepList from '../containers/StepList'

export default class App extends React.Component {
  render() {
    return (
      <div className="root">
        <IngredientList />
        <StepList />
      </div>
    );
  }
}
