import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import styles from './Description.scss';
import OptionPuta from './OptionPuta';
import OptionSmoon from './OptionSmoon';

class Description extends React.Component {
  render() {
    const { currentToolIds } = this.props;
    const option = () => {
      if (currentToolIds.includes('pot') && currentToolIds.includes('puta')) {
        return (
          <div className={styles.options}>
            <OptionPuta />
          </div>
        );
      } else if (currentToolIds.includes('smoon')) {
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
  currentToolIds: _.pluck(state.tools.filter(tool => (
    state.steps[state.currentStep.stepId].toolIds.includes(tool.id)
  )), 'id'),
}))(Description);
