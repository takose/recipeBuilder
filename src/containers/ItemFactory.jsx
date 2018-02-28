import React from 'react';
import _ from 'underscore';

export default function ItemFactory(ItemComponent, styles) {
  return ({
    currentActionIds, currentItemIds, item, actions, onItemClick, currentActionId,
  }) => {
    const isUsed = currentItemIds.find(id => id === item.id) !== undefined;
    let newCurrentItemIds;
    let newActionIds;
    let className;
    let onClick;
    if (isUsed) {
      newCurrentItemIds = currentItemIds.filter(id => id !== item.id);
      newActionIds = _.pluck(actions.filter(action => (
        _.intersection(action.itemIds, newCurrentItemIds).length === newCurrentItemIds.length
      )), 'id');
      className = styles.itemButtonUsed;
      onClick = () => onItemClick(newCurrentItemIds, newActionIds, currentActionId);
    } else {
      newCurrentItemIds = [...currentItemIds, item.id];
      newActionIds = currentActionIds.filter((actionId) => {
        const action = actions.find(a => actionId === a.id);
        return _.intersection(action.itemIds, newCurrentItemIds).length === newCurrentItemIds.length;
      });
      if (currentActionIds.length !== 0 && newActionIds.length === 0) {
        className = styles.itemButtonInactive;
      } else {
        onClick = () => onItemClick(newCurrentItemIds, newActionIds, currentActionId);
        className = styles.itemButton;
      }
    }
    return (
      <button
        key={item.id}
        {...{ className, onClick }}
      >
        <ItemComponent item={item} />
      </button>
    );
  };
}
