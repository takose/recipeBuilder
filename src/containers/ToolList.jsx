import { connect } from 'react-redux';
import { updateTool, updateAction, updateStepAction } from '../actions';
import styles from './ToolList.scss';
import Tool from './Tool';
import ListFactory from './ListFactory';

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
});

const mapDispatchToProps = dispatch => ({
  onItemClick: (toolIds, actionIds, currentActionId) => {
    dispatch(updateAction(actionIds));
    dispatch(updateTool(toolIds));
    if (toolIds.length === 0 || !(actionIds.includes(currentActionId))) dispatch(updateStepAction(''));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolList);
