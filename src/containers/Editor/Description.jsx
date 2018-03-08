import React from 'react';
import { connect } from 'react-redux';
import styles from './Description.scss';
import OptionPuta from './OptionPuta';
import OptionSmoon from './OptionSmoon';

class Description extends React.Component {
  render() {
    const { device } = this.props;
    const option = () => {
      if (device === 'puta') {
        return (
          <div className={styles.options}>
            <OptionPuta />
          </div>
        );
      } else if (device === 'smoon') {
        return (
          <div className={styles.options}>
            <OptionSmoon />
          </div>
        );
      }
      return null;
    };

    return (
      <div className={styles.descriptionWrapper}>
        {option()}
      </div>
    );
  }
}

export default connect((state) => {
  const step = state.steps[state.currentStep.stepId];
  const device = step.options !== null ? step.options.name : null;
  return {
    currentActionId: step.actionId,
    device,
  };
})(Description);
