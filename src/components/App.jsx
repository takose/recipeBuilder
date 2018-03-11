import 'normalize.css';
import React from 'react';
import IngredientList from '../containers/Editor/IngredientList';
import ToolList from '../containers/Editor/ToolList';
import StepWrapper from '../containers/Editor/StepWrapper';
import StepList from '../containers/StepList';
import Sidebar from '../containers/Sidebar';
import styles from './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <Sidebar />
        <div className={styles.workspace}>
          <div className={styles.toolBar}>
            <ToolList />
            <IngredientList />
          </div>
          <StepWrapper />
        </div>
        <div className={styles.stepListWrapper}>
          <h1>Directions</h1>
          <StepList />
        </div>
      </div>
    );
  }
}
