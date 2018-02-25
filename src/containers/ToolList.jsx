import React from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import { updateTool, updateAction } from '../actions';
import styles from './ToolList.scss';
import Tool from './Tool';


class ToolList extends React.Component {
  render() {
    const { currentActionIds, currentTools, tools, actions } = this.props;

    const toolList = tools.map((tool) => {
      const isUsed = currentTools.find(cTool => cTool.id === tool.id) !== undefined;
      const currentToolIds = _.pluck(currentTools, 'id');
      if (isUsed) {
        const newCurrentToolIds = currentToolIds.filter(id => id !== tool.id);
        const newActionIds = actions.filter((action) => {
          return _.intersection(action.toolIds, newCurrentToolIds).length === newCurrentToolIds;
        });
        return (
          <button
            key={tool.id}
            className={styles.toolButtonUsed}
            onClick={() => this.props.onToolClick(newCurrentToolIds, newActionIds)}
          >
            <Tool
              toolId={tool.id}
            />
          </button>
        );
      }

      const newCurrentToolIds = [...currentToolIds, tool.id];
      const newActionIds = actions.filter((action) => {
        return _.intersection(action.toolIds, newCurrentToolIds).length === newCurrentToolIds.length;
      });

      if (currentTools.length !== 0 && newActionIds.length === 0) {
        return (
          <button
            key={tool.id}
            className={styles.toolButtonInactive}
          >
            <Tool
              toolId={tool.id}
            />
          </button>
        );
      }

      return (
        <button
          key={tool.id}
          className={styles.toolButton}
          onClick={() => this.props.onToolClick(newCurrentToolIds, newActionIds)}
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
    actions: state.actions,
    equipments: state.equipments,
    currentActionIds: state.currentStep.actionIds,
    currentTools: state.tools.filter((tool) => {
      return state.steps[state.currentStep.stepId].toolIds.includes(tool.id);
    }),
  };
};

const mapDispatchToProps = dispatch => ({
  onToolClick: (toolIds, actionIds) => {
    dispatch(updateAction(actionIds));
    dispatch(updateTool(toolIds));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolList);
