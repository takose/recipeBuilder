import React from 'react';
import { connect } from 'react-redux';
import styles from './Description.scss';
import OptionPuta from './OptionPuta';
import OptionSmoon from './OptionSmoon';

class Description extends React.Component {
  render() {
    const { optionName } = this.props;
    const option = () => {
      if (optionName === 'puta') {
        return (
          <div className={styles.options}>
            <OptionPuta />
          </div>
        );
      } else if (optionName === 'smoon') {
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

export default connect(state => ({
  currentActionId: state.steps[state.currentStep.stepId].actionId,
  optionName: state.currentStep.option,
}))(Description);
