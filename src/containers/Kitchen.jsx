import React from 'react';
import { addStep } from '../actions';
import styles from './Kitchen.scss';
import Step from './Step';
import StepNavigation from '../containers/StepNavigation';

export default class Kitchen extends React.Component {
  render() {
    return (
      <div className={styles.kitchenWrapper}>
        <StepNavigation />
        <div className={styles.kitchen}>
          <div className={styles.stove}>
            <Step equipmentId={4} />
          </div>
          <div className={styles.table}>
            <Step equipmentId={5} />
          </div>
        </div>
      </div>
    );
  }
}
