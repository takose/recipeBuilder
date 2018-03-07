import 'normalize.css';
import React from 'react';
import IngredientList from '../containers/Editor/IngredientList';
import ToolList from '../containers/Editor/ToolList';
import StepWrapper from '../containers/Editor/StepWrapper';
import StepList from '../containers/Editor/StepList';
import StepNavigation from '../containers/Editor/StepNavigation';
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
