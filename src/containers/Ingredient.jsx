import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import IngredientImage from './IngredientImage';
import styles from './Ingredient.scss';

class Ingredient extends React.Component {
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
      item, currentItemIds, currentActionIds, actions,
    } = this.props;
    const isUsed = currentItemIds.find(id => id === item.id) !== undefined;
    let newCurrentIngredientIds;
    let newActionIds;
    let className;
    let onClick;
    if (isUsed) {
      newCurrentIngredientIds = currentItemIds.filter(id => id !== item.id);
      newActionIds = _.pluck(actions.filter(action => (
        _.intersection(action.ingredientIds, newCurrentIngredientIds).length === newCurrentIngredientIds.length
      )), 'id');
      className = styles.ingredientButtonUsed;
      onClick = () => this.props.onClick(newCurrentIngredientIds, newActionIds);
    } else {
      newCurrentIngredientIds = [...currentItemIds, item.id];
      newActionIds = currentActionIds.filter((actionId) => {
        const action = actions.find(a => actionId === a.id);
        return _.intersection(action.ingredientIds, newCurrentIngredientIds).length === newCurrentIngredientIds.length;
      });
      if (currentActionIds.length !== 0 && newActionIds.length === 0) {
        className = styles.ingredientButtonInactive;
      } else {
        onClick = () => this.props.onClick(newCurrentIngredientIds, newActionIds);
        className = styles.ingredientButton;
      }
    }
    return (
      <button
        key={item.id}
        {...{ className, onClick }}
      >
        <IngredientImage ingredient={item} />
      </button>
    );
  }
}

export default Ingredient;
