import React from 'react';
import { connect } from 'react-redux';
import { addIngredient } from '../actions';
import Ingredient from './Ingredient';
import styles from './IngredientList.scss';

class IngredientList extends React.Component {
  render() {
    const ingredients = this.props.ingredients.map(ingredient => (
      <button
        className={styles.ingredient}
        key={ingredient.id}
        onClick={() => {
          if (ingredient.merged === false) {
            this.props.onIngredientClick(ingredient);
          }
        }}
      >
        <Ingredient
          ingredient={ingredient}
          equipment={{}}
        />
      </button>
    ));
    return (
      <div className={styles.ingredientList}>
        <img
          src="https://i.gyazo.com/703b9a16e0c72bc292c3b0fbb95e3a8a.png"
          alt=""
          className={styles.ingredientImage}
        />
        {ingredients}
      </div>
    );
  }
}

export default connect(state => ({
  ingredients: state.ingredients,
}), {
  onIngredientClick: addIngredient,
})(IngredientList);
