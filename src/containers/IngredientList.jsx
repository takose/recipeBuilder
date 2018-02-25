import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import { updateIngredient, updateAction } from '../actions';
import Ingredient from './Ingredient';
import styles from './IngredientList.scss';

class IngredientList extends React.Component {
  render() {
    const { currentActionIds, currentIngredientIds, ingredients, actions } = this.props;

    const ingredientList = ingredients.map((ingredient) => {
      const isUsed = currentIngredientIds.find(id => id === ingredient.id) !== undefined;
      if (isUsed) {
        const newCurrentIngredientIds = currentIngredientIds.filter(id => id !== ingredient.id);
        const newActionIds = _.pluck(actions.filter(action => (
          _.intersection(action.ingredientIds, newCurrentIngredientIds).length === newCurrentIngredientIds.length
        )), 'id');
        return (
          <button
            key={ingredient.id}
            className={styles.ingredientButtonUsed}
            onClick={() => this.props.onIngredientClick(newCurrentIngredientIds, newActionIds)}
          >
            <Ingredient
              ingredient={ingredient}
            />
          </button>
        );
      }

      const newCurrentIngredientIds = [...currentIngredientIds, ingredient.id];
      const newActionIds = currentActionIds.filter((actionId) => {
        const action = actions.find(a => actionId === a.id);
        return _.intersection(action.ingredientIds, newCurrentIngredientIds).length === newCurrentIngredientIds.length;
      });

      if (currentActionIds.length !== 0 && newActionIds.length === 0) {
        return (
          <button
            key={ingredient.id}
            className={styles.ingredientButtonInactive}
          >
            <Ingredient
              ingredient={ingredient}
            />
          </button>
        );
      }

      return (
        <button
          className={styles.ingredient}
          key={ingredient.id}
          onClick={() => this.props.onIngredientClick(newCurrentIngredientIds, newActionIds)}
        >
          <Ingredient
            ingredient={ingredient}
            equipment={{}}
          />
        </button>
      );
    });

    return (
      <div className={styles.ingredientList}>
        <img
          src="https://i.gyazo.com/eb9fe663c24ef82dcf05ebd910ae1b78.png"
          alt=""
          className={styles.ingredientImage}
        />
        {ingredientList}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  actions: state.actions,
  currentActionIds: state.currentStep.actionIds,
  currentIngredientIds: state.steps[state.currentStep.stepId].ingredientIds,
});

const mapDispatchToProps = dispatch => ({
  onIngredientClick: (ingredientIds, actionIds) => {
    dispatch(updateAction(actionIds));
    dispatch(updateIngredient(ingredientIds));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientList);
