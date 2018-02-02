import { connect } from 'react-redux';
import React from 'react';
import styles from './StepList.scss';
import Step from './Step';

class StepList extends React.Component {
  render() {
    const { steps } = this.props;
    const stepList = [];
    const stepKeys = Object.keys(steps);
    stepKeys.pop();
    stepKeys.forEach((key) => {
      stepList.push(
        <div className={styles.step}>
          <Step stepId={key} showAction={false} />
        </div>
      );
    });
    return (
      <div className={styles.stepList}>
        {stepList}
      </div>
    );
  }
}

export default connect(state => ({
  steps: state.steps,
}))(StepList);
