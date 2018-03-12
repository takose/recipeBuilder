import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import { connect } from 'react-redux';
import styles from './StepNavigation.scss';
import {
  addStep,
  incrementCurrentStepId,
  updateIngredientState,
  addMiddleState,
  updateMergedIngredientState,
  addToPuta,
  setActiveTool,
} from '../../actions';

class StepNavigation extends React.Component {
  render() {
    const {
      step,
      optionCorrect,
      currentStepState,
    } = this.props;

    const buttonIsActive = step.actionId !== '' && optionCorrect;
    return (
      <div
        className={
          buttonIsActive ? styles.stepNavigation : styles.stepNavigationInactive
        }
      >
        <button
          onClick={() => {
            if (buttonIsActive) {
              this.props.onNextStepClick(step, currentStepState);
            }
          }}
        >
          <FontAwesomeIcon icon={faCheck} /> Next Step
        </button>
      </div>
    );
  }
}

StepNavigation.propTypes = {
  onNextStepClick: PropTypes.func.isRequired,
  optionCorrect: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  step: PropTypes.PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  currentStepState: PropTypes.PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  step: state.steps[state.currentStep.stepId],
  actions: state.actions,
  optionCorrect: true,
  currentStepState: state.currentStep,
});

const mapDispatchToProps = dispatch => ({
  onNextStepClick: (step, currentState) => {
    if (step.ngredientIds !== undefined && step.actionId !== null) {
      dispatch(updateIngredientState(step.ingredientIds, step.ctionId));
    }
    const WILL_HAVE_MIDDLE_STATE_ACTION_IDS = ['stew', 'stir_fly', 'put_in', 'measure', 'mix'];
    if (WILL_HAVE_MIDDLE_STATE_ACTION_IDS.includes(step.actionId)) {
      dispatch(addMiddleState(step.toolIds));
      dispatch(updateMergedIngredientState(step.ingredientIds));
    }
    dispatch(addStep());
    dispatch(incrementCurrentStepId());
    if (step.actionId === 'prepare' && step.toolIds.includes('puta')) {
      dispatch(setActiveTool('puta'));
    } else if (step.actionId === 'prepare') {
      dispatch(setActiveTool(null));
    }
    console.log(currentState.activeTool, step.actionId)
    if (currentState.activeTool === 'puta' && step.actionId === 'measure') {
      dispatch(addToPuta(step.ingredientIds));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StepNavigation);
