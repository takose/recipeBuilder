import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import styles from './Tool.scss';
import ToolImage from './ToolImage';


class Tool extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    item: PropTypes.object.isRequired,
    currentItemIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentActionIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    actions: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClick: PropTypes.func.isRequired,
  }

  render() {
    const {
      item,
      currentItemIds,
      currentActionIds,
      actions,
    } = this.props;
    const isUsed = currentItemIds.find(id => id === item.id) !== undefined;
    let newCurrentToolIds;
    let newActionIds;
    let className;
    let onClick;
    if (isUsed) {
      newCurrentToolIds = currentItemIds.filter(id => id !== item.id);
      newActionIds = _.pluck(actions.filter(action => (
        _.intersection(action.toolIds, newCurrentToolIds).length === newCurrentToolIds.length
      )), 'id');
      className = styles.toolButtonUsed;
      onClick = () => this.props.onClick(newCurrentToolIds, newActionIds);
    } else {
      newCurrentToolIds = [...currentItemIds, item.id];
      newActionIds = currentActionIds.filter((actionId) => {
        const action = actions.find(a => actionId === a.id);
        return _.intersection(action.toolIds, newCurrentToolIds).length === newCurrentToolIds.length;
      });
      if (currentActionIds.length !== 0 && newActionIds.length === 0) {
        className = styles.toolButtonInactive;
      } else {
        onClick = () => this.props.onClick(newCurrentToolIds, newActionIds);
        className = styles.toolButton;
      }
    }
    return (
      <button
        key={item.id}
        {...{ className, onClick }}
      >
        <ToolImage tool={item} />
      </button>
    );
  }
}

export default Tool;
