import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import styles from './StepWrapper.scss';
import TempStep from './TempStep';
import OptionPuta from './OptionPuta';
import OptionSmoon from './OptionSmoon';

class StepWrapper extends React.Component {
  render() {
    const { stepId, currentToolIds } = this.props;
    return (
      <div className={styles.stepWrapper}>
        <TempStep stepId={stepId} />
        {_.isEqual(currentToolIds, ['pot', 'puta']) ? <OptionPuta stepId={stepId} /> : null}
        {currentToolIds.includes('spoon') ? <OptionSmoon stepId={stepId} /> : null}
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

