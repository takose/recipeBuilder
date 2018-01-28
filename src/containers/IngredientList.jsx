import React from 'react';
import { connect } from 'react-redux';
import { addIngredient } from '../actions';
import styles from './IngredientList.scss';

class IngredientList extends React.Component {
  render() {
    const ingredients = this.props.ingredients.map(ingredient => (
      <button
        className={styles.ingredient}
        key={ingredient.id}
        onClick={() => this.props.onIngredientClick(ingredient)}
      >
        <img src={ingredient.image_url} alt={ingredient.name} />
      </button>
    ));
    return (
      <div className={styles.ingredientList}>
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
