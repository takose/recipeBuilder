import { connect } from 'react-redux';
import { updateTool, updateAction } from '../actions';
import styles from './ToolList.scss';
import Tool from './Tool';
import ListFactory from './ListFactory';

const mapStateToProps = state => ({
  items: state.tools,
  actions: state.actions,
  currentActionIds: state.currentStep.actionIds,
  currentItemIds: state.steps[state.currentStep.stepId].toolIds,
});

const mapDispatchToProps = dispatch => ({
  onClick: (toolIds, actionIds) => {
    dispatch(updateAction(actionIds));
    dispatch(updateTool(toolIds));
  },
});

const ToolList = ListFactory(
  Tool,
  {
    listClassName: styles.toolList,
    imageClassName: styles.toolImage,
    imageUrl: 'https://i.gyazo.com/3ab14d24c3eb95e93518cff1eeac34ef.png',
  },
);
export default connect(mapStateToProps, mapDispatchToProps)(ToolList);
