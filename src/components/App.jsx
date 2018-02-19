import 'normalize.css';
import React from 'react';
import IngredientList from '../containers/IngredientList';
import ToolList from '../containers/ToolList';
import Kitchen from '../containers/Kitchen';
import StepList from '../containers/StepList';
import styles from './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.workspace}>
          <div className={styles.toolBar}>
            <IngredientList />
            <ToolList />
          </div>
          <Kitchen />
        </div>
        <StepList className={styles.stepList} />
      </div>
    );
  }
}
