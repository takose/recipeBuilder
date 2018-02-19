import React from 'react';
import { connect } from 'react-redux';
import styles from './StepWrapper.scss';
import TempStep from './TempStep';

class StepWrapper extends React.Component {
  render() {
    const { stepId, currentToolIds } = this.props;
    return (
      <div className={styles.stepWrapper}>
        <TempStep stepId={stepId} />
      </div>
    );
  }
}

export default connect((state) => {
  return {
    stepId: state.currentStep.stepId,
    currentToolIds: state.steps[state.currentStep.stepId].toolIds,
  };
})(StepWrapper);

