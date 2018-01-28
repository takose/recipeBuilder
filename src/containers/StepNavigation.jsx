import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCoffee from '@fortawesome/fontawesome-free-solid/faHandPointRight';
import { connect } from 'react-redux';
import styles from './StepNavigation.scss';
import { addStep, incrementCurrentStepId, updateIngredientState } from '../actions';

class StepNavigation extends React.Component {
  render() {
    const { currentIngredientId, currentToolId, actions, tools } = this.props;
    const currentTool = tools.find(tool => tool.id === currentToolId);
    const currentActionId = currentTool ?
      actions.find(action => action.id === currentTool.actionId).id :
      null;
    return (
      <div className={styles.stepNavigation}>
        <button onClick={() => this.props.onNextStepClick(currentIngredientId, currentActionId)}>
          Next <FontAwesomeIcon icon={faCoffee} />
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentIngredientId: state.steps[state.currentStepId].ingredientId,
  currentToolId: state.steps[state.currentStepId].toolId,
  tools: state.tools,
  actions: state.actions,
});

const mapDispatchToProps = dispatch => ({
  onNextStepClick: (currentIngredientId, currentActionId) => {
    if (currentIngredientId !== undefined && currentActionId !== null) {
      dispatch(updateIngredientState(currentIngredientId, currentActionId));
    }
    dispatch(addStep());
    dispatch(incrementCurrentStepId());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StepNavigation);

