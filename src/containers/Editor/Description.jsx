import React from 'react';
import { connect } from 'react-redux';
import styles from './Description.scss';
import OptionPuta from './OptionPuta';
import OptionMeasure from './OptionMeasure';
import OptionFF from './OptionFF';
import OptionCut from './OptionCut';

class Description extends React.Component {
  render() {
    const { device, currentActionId } = this.props;
    const option = () => {
      switch (device) {
        case 'puta':
          return (
            <div className={styles.options}>
              <OptionPuta />
            </div>
          );
        case 'integlass':
          return (
            <div className={styles.options}>
              <OptionMeasure device="integlass" />
            </div>
          );
        case 'smoon':
          return (
            <div className={styles.options}>
              <OptionMeasure device="smoon" />
            </div>
          );
        case 'ff':
          return (
            <div className={styles.options}>
              <OptionFF />
            </div>
          );
        case null:
          if (currentActionId === 'cut') {
            return (
              <div className={styles.options}>
                <OptionCut />
              </div>
            );
          }
          break;
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
