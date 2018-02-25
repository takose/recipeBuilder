import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import styles from './ToolList.scss';
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
    if (isUsed) {
      const newCurrentToolIds = currentItemIds.filter(id => id !== item.id);
      const newActionIds = _.pluck(actions.filter(action => (
        _.intersection(action.toolIds, newCurrentToolIds).length === newCurrentToolIds.length
      )), 'id');
      return (
        <button
          key={item.id}
          className={styles.toolButtonUsed}
          onClick={() => this.props.onClick(newCurrentToolIds, newActionIds)}
        >
          <ToolImage tool={item} />
        </button>
      );
    }

    const newCurrentToolIds = [...currentItemIds, item.id];
    const newActionIds = currentActionIds.filter((actionId) => {
      const action = actions.find(a => actionId === a.id);
      return _.intersection(action.toolIds, newCurrentToolIds).length === newCurrentToolIds.length;
    });

    if (currentActionIds.length !== 0 && newActionIds.length === 0) {
      return (
        <button
          key={item.id}
          className={styles.toolButtonInactive}
        >
          <ToolImage tool={item} />
        </button>
      );
    }

    return (
      <button
        key={item.id}
        className={styles.toolButton}
        onClick={() => this.props.onClick(newCurrentToolIds, newActionIds)}
      >
        <ToolImage tool={item} />
      </button>
    );
  }
}

export default Tool;
