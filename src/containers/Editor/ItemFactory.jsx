import React from 'react';
import _ from 'underscore';

export default function ItemFactory(ItemComponent, styles) {
  return ({
    currentActionIds, currentItemIds, item, actions, onItemClick, currentActionId, currentAllItemIds,
  }) => {
    const isUsed = currentItemIds.find(id => id === item.id) !== undefined;
    let newCurrentItemIds;
    let newActionIds;
    let newCurrentActionId;
    let className;
    let onClick;
    if (isUsed) {
      newCurrentItemIds = currentItemIds.filter(id => id !== item.id);
      const newCurrentAllItemIds = currentAllItemIds.filter(id => id !== item.id);
      newActionIds = _.pluck(actions.filter(action => (
        _.intersection(action.itemIds, newCurrentAllItemIds).length === newCurrentAllItemIds.length
      )), 'id');
      className = styles.itemButtonUsed;
      newCurrentActionId = newCurrentAllItemIds.length === 0 ? '' : currentActionId;
      onClick = () => onItemClick(newCurrentItemIds, newActionIds, newCurrentActionId);
    } else {
      newCurrentItemIds = [...currentItemIds, item.id];
      let ids;
      if (currentActionIds.length === 0) {
        ids = ['prepare', 'switch_power', 'fry', 'coat', 'stew', 'cut', 'stir_fly', 'measure', 'put_in'];
      } else {
        ids = currentActionIds;
      }
      newActionIds = ids.filter((actionId) => {
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
