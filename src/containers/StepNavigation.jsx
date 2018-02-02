import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faNext from '@fortawesome/fontawesome-free-solid/faHandPointRight';
import { connect } from 'react-redux';
import styles from './StepNavigation.scss';
import { addStep, incrementCurrentStepId, updateIngredientState, addMiddleState } from '../actions';

class StepNavigation extends React.Component {
  render() {
    const {
      currentIngredientId,
      currentToolId,
      actions,
      tools,
      currentActionId
    } = this.props;

    return (
      <div className={styles.stepNavigation}>
        <button
          onClick={() => (
            this.props.onNextStepClick(currentIngredientId, currentToolId, currentActionId)
          )}
        >
          Next <FontAwesomeIcon icon={faNext} />
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentIngredientId: state.steps[state.currentStep.stepId].ingredientId,
  currentToolId: state.steps[state.currentStep.stepId].toolIds,
  currentActionId: state.steps[state.currentStep.stepId].actionId,
  tools: state.tools,
  actions: state.actions,
});

const mapDispatchToProps = dispatch => ({
  onNextStepClick: (currentIngredientId, currentToolId, currentActionId) => {
    if (currentIngredientId !== undefined && currentActionId !== null) {
      dispatch(updateIngredientState(currentIngredientId, currentActionId));
    }
    const WILL_HAVE_MIDDLE_STATE_TOOL_IDS = ['pot'];
    if (WILL_HAVE_MIDDLE_STATE_TOOL_IDS.includes(currentToolId)) {
      dispatch(addMiddleState(currentToolId));
    }
    dispatch(addStep());
    dispatch(incrementCurrentStepId());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StepNavigation);

