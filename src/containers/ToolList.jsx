import React from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import { updateTool, updateAction } from '../actions';
import styles from './ToolList.scss';

const ImageButton = ({ tool, onToolClick }) => (
  <button
    className={styles.tool}
    onClick={() => onToolClick(tool)}
  >
    <img
      className={styles.toolImage}
      src={tool.image_url}
      alt={tool.name}
    />
  </button>
);

class ToolList extends React.Component {
  render() {
    const { currentActionIds, currentTools } = this.props;
    const tools = this.props.tools.map((tool) => {
      const actionIds = currentActionIds.filter((actionId) => {
        return tool.actionIdsToCombine.includes(actionId);
      });
      actionIds.push(tool.actionIds[0]);
      const newCurrentToolIds = _.pluck(currentTools.filter((t) => {
        return _.intersection(t.actionIds, actionIds).length > 0 &&
        t.priority !== tool.priority;
      }), 'id');
      newCurrentToolIds.push(tool.id);
      const actionId = actionIds[0];
      return (
        <ImageButton
          key={tool.id}
          tool={tool}
          onToolClick={() => this.props.onToolClick(newCurrentToolIds, actionId, actionIds)}
        />
      );
    });
    return (
      <div className={styles.toolList}>
        {tools}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const tools = state.tools.filter(tool => !state.equipments.hasOwnProperty(tool.id));
  return {
    tools,
    equipments: state.equipments,
    currentActionIds: state.currentStep.actionIds,
    currentTools: tools.filter((tool) => {
      return state.steps[state.currentStep.stepId].toolIds.includes(tool.id);
    }),
  };
};

const mapDispatchToProps = dispatch => ({
  onToolClick: (toolIds, actionId, actionIds) => {
    dispatch(updateAction(actionIds));
    dispatch(updateTool(toolIds, actionId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolList);
