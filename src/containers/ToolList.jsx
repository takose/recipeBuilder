import { connect } from 'react-redux';
import styles from './ToolList.scss';
import Tool from './Tool';
import ListFactory from './ListFactory';
import {
  updateTool,
  updateAction,
  updateStepAction,
  enableOption,
  updateOption,
} from '../actions';

const ToolList = ListFactory(
  Tool,
  {
    listClassName: styles.toolList,
    imageClassName: styles.toolImage,
    imageUrl: 'https://i.gyazo.com/3ab14d24c3eb95e93518cff1eeac34ef.png',
  },
);

const mapStateToProps = state => ({
  items: state.tools,
  actions: state.actions,
  currentActionIds: state.currentStep.actionIds,
  currentItemIds: state.steps[state.currentStep.stepId].toolIds,
  currentActionId: state.steps[state.currentStep.stepId].actionId,
  currentAllItemIds: [
    ...state.steps[state.currentStep.stepId].ingredientIds,
    ...state.steps[state.currentStep.stepId].toolIds,
  ],
});

const mapDispatchToProps = dispatch => ({
  onItemClick: (toolIds, actionIds, currentActionId) => {
    dispatch(updateAction(actionIds));
    dispatch(updateTool(toolIds));
    if (!(actionIds.includes(currentActionId))) {
      dispatch(updateStepAction(''));
      dispatch(enableOption(null));
      dispatch(updateOption(null));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolList);
