import React from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import { updateTool, updateAction } from '../actions';
import styles from './ToolList.scss';
import Tool from './Tool';


class ToolList extends React.Component {
  render() {
    const { currentActionIds, currentTools, toolPlace, tools } = this.props;
    const toolList = tools.map((tool) => {
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
        <button
          key={tool.id}
          className={styles.toolButton}
          onClick={() => this.props.onToolClick(newCurrentToolIds, actionId, actionIds, toolPlace)}
        >
          <Tool
            toolId={tool.id}
          />
        </button>
      );
    });
    return (
      <div className={styles.toolList}>
        <img
          src="https://i.gyazo.com/3ab14d24c3eb95e93518cff1eeac34ef.png"
          alt=""
          className={styles.toolImage}
        />
        {toolList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tools: state.tools,
    equipments: state.equipments,
    currentActionIds: state.currentStep.actionIds,
    currentTools: state.tools.filter((tool) => {
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
