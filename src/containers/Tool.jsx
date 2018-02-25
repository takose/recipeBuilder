import React from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import styles from './ToolList.scss';
import PropTypes from 'prop-types';
import ToolImage from './ToolImage';


class Tool extends React.Component {
  static propTypes = {
    item: PropTypes.object,
    currentItemIds: PropTypes.arrayOf(PropTypes.string),
    currentActionIds: PropTypes.arrayOf(PropTypes.string),
    actions: PropTypes.array,
    onClick: PropTypes.func,
  }

  render() {
      const { item, currentItemIds, currentActionIds, actions } = this.props;
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
           <ToolImage
              tool={item}
            />
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
            <ToolImage
              tool={item}
            />
          </button>
        );
      }

      return (
        <button
          key={item.id}
          className={styles.toolButton}
          onClick={() => this.props.onClick(newCurrentToolIds, newActionIds)}
        >
          <ToolImage
            tool={item} />
        </button>
      );
  }
}

export default Tool;
