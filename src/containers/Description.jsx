import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import styles from './Description.scss';
import OptionPuta from './OptionPuta';
import OptionSmoon from './OptionSmoon';

class Description extends React.Component {
  render() {
    const { currentToolIds, currentActionName } = this.props;
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
        <div className={styles.actionName}>
          {currentActionName}
        </div>
        {option()}
      </div>
    );
  }
}

export default connect((state) => {
  const action = state.actions.find(a => state.steps[state.currentStep.stepId].actionId === a.id);
  return {
    currentToolIds: _.pluck(state.tools.filter((tool) => {
      return state.steps[state.currentStep.stepId].toolIds.includes(tool.id);
    }), 'id'),
    currentActionName: action ? action.name_ja : null,
  };
})(Description);
