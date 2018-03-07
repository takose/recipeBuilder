import 'normalize.css';
import React from 'react';
import Sidebar from '../containers/Sidebar';
import StepList from '../containers/StepList';
import styles from './App.scss';

export default class Player extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <Sidebar />
        <div className={styles.content}>
          <h1>Directions</h1>
          <StepList />
        </div>
      </div>
    );
  }
}

