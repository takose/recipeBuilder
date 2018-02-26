import React from 'react';
import { connect } from 'react-redux';
import styles from './Ingredient.scss';

class IngredientImage extends React.Component {
  render() {
    const { ingredient, actions, showAction } = this.props;
    let actionImgs;
    if (showAction !== false) {
      actionImgs = ingredient.addedActionIds.map((actionId) => {
        const SHOW_ACTION_IDS = ['cut'];
        if (SHOW_ACTION_IDS.includes(actionId)) {
          const action = actions.find(a => a.id === actionId);
          return (
            <img
              src={action.imageUrl}
              className={styles.actionImage}
              alt="actionImage"
            />
          );
        }
        return null;
      });
    }
    return (
      <div
        className={styles.ingredientImage}
        style={{
          backgroundImage: `url(${ingredient.image_url})`,
          opacity: (ingredient.merged && showAction !== false) ? 0.5 : 1
        }}
      >
        {actionImgs}
      </div>
    );
  }
}

export default connect(state => ({
  actions: state.actions,
}))(IngredientImage);
