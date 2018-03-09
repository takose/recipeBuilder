import React from 'react';
import { connect } from 'react-redux';
import styles from './Description.scss';
import OptionPuta from './OptionPuta';
import OptionSmoon from './OptionSmoon';
import OptionFF from './OptionFF';

class Description extends React.Component {
  render() {
    const { device } = this.props;
    const option = () => {
      switch (device) {
        case 'puta':
          return (
            <div className={styles.options}>
              <OptionPuta />
            </div>
          );
        case 'smoon':
          return (
            <div className={styles.options}>
              <OptionSmoon />
            </div>
          );
        case 'ff':
          return (
            <div className={styles.options}>
              <OptionFF />
            </div>
          );
        default:
          break;
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
  const device = step.options !== null ? step.options.device : null;
  return {
    currentActionId: step.actionId,
    device,
  };
})(Description);
