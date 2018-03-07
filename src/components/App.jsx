import 'normalize.css';
import React from 'react';
import IngredientList from '../containers/IngredientList';
import ToolList from '../containers/ToolList';
import StepWrapper from '../containers/StepWrapper';
import StepList from '../containers/StepList';
import StepNavigation from '../containers/StepNavigation';
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
          <StepNavigation />
          <StepWrapper />
        </div>
        <StepList />
      </div>
    );
  }
}
