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
      currentIngredientIds,
      currentToolIds,
      currentActionId,
    } = this.props;

    return (
      <div className={styles.stepNavigation}>
        <button
          onClick={() => (
            this.props.onNextStepClick(currentIngredientIds, currentToolIds, currentActionId)
          )}
        >
          <FontAwesomeIcon icon={faCheck} /> Next Step
        </button>
      </div>
    );
  }
}

StepNavigation.propTypes = {
  currentToolIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  onNextStepClick: PropTypes.func.isRequired,
  currentActionId: PropTypes.string,
  currentIngredientIds: PropTypes.arrayOf(PropTypes.string),
};

StepNavigation.defaultProps = {
  currentActionId: undefined,
  currentIngredientIds: undefined,
};

const mapStateToProps = state => ({
  currentIngredientIds: state.steps[state.currentStep.stepId].ingredientIds,
  currentToolIds: state.steps[state.currentStep.stepId].toolIds,
  currentActionId: state.steps[state.currentStep.stepId].actionId,
  actions: state.actions,
});

const mapDispatchToProps = dispatch => ({
  onNextStepClick: (currentIngredientIds, currentToolIds, currentActionId) => {
    if (!(currentIngredientIds.length === 0 && currentToolIds.length === 0)) {
      if (currentIngredientIds !== undefined && currentActionId !== null) {
        dispatch(updateIngredientState(currentIngredientIds, currentActionId));
      }
      const WILL_HAVE_MIDDLE_STATE_ACTION_IDS = ['stew', 'stir_fly', 'put_in', 'measure', 'mix'];
      if (WILL_HAVE_MIDDLE_STATE_ACTION_IDS.includes(currentActionId)) {
        dispatch(addMiddleState(currentToolIds));
        dispatch(updateMergedIngredientState(currentIngredientIds));
      }
      dispatch(addStep());
      dispatch(incrementCurrentStepId());
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StepNavigation);

