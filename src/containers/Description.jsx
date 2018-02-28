import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import styles from './Description.scss';
import OptionPuta from './OptionPuta';
import OptionSmoon from './OptionSmoon';

class Description extends React.Component {
  render() {
    const { currentActionId } = this.props;
    const option = () => {
      if (currentActionId === 'pour') {
        return (
          <div className={styles.options}>
            <OptionPuta />
          </div>
        );
      } else if (currentActionId === 'measure') {
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
}))(Description);
