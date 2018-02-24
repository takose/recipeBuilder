import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import { connect } from 'react-redux';
import styles from './StepNavigation.scss';
import { addStep, incrementCurrentStepId, updateIngredientState, addMiddleState, updateMergedIngredientState } from '../actions';

class StepNavigation extends React.Component {
  render() {
    const {
      currentIngredientId,
      currentToolId,
      currentActionId,
    } = this.props;

    return (
      <div className={styles.stepNavigation}>
        <button
          onClick={() => (
            this.props.onNextStepClick(currentIngredientId, currentToolId, currentActionId)
          )}
        >
          <FontAwesomeIcon icon={faCheck} /> Next Step
        </button>
      </div>
    );
  }
}

StepNavigation.propTypes = {
  currentToolId: PropTypes.arrayOf(PropTypes.string).isRequired,
  onNextStepClick: PropTypes.func.isRequired,
  currentActionId: PropTypes.string,
  currentIngredientId: PropTypes.string,
};

StepNavigation.defaultProps = {
  currentActionId: undefined,
  currentIngredientId: undefined,
}

const mapStateToProps = state => ({
  currentIngredientId: state.steps[state.currentStep.stepId].ingredientId,
  currentToolId: state.steps[state.currentStep.stepId].toolIds,
  currentActionId: state.steps[state.currentStep.stepId].actionId,
  actions: state.actions,
});

const mapDispatchToProps = dispatch => ({
  onNextStepClick: (currentIngredientId, currentToolId, currentActionId) => {
    if (currentIngredientId !== undefined && currentActionId !== null) {
      dispatch(updateIngredientState(currentIngredientId, currentActionId));
    }
    const WILL_HAVE_MIDDLE_STATE_ACTION_IDS = ['stew', 'stir_fly', 'put_in', 'measure', 'mix'];
    if (WILL_HAVE_MIDDLE_STATE_ACTION_IDS.includes(currentActionId)) {
      dispatch(addMiddleState(currentToolId));
      dispatch(updateMergedIngredientState(currentIngredientId));
    }
    dispatch(addStep());
    dispatch(incrementCurrentStepId());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StepNavigation);

