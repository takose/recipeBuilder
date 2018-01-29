import React from 'react';
import { connect } from 'react-redux';
import styles from './Ingredient.scss';

class Ingredient extends React.Component {
  render() {
    const { ingredient, equipment, actions } = this.props;
    const { name } = equipment;
    const actionImgs = ingredient.addedActionIds.map((actionId) => {
      const VIEW_ACTION_IDS = [2];
      if (VIEW_ACTION_IDS.includes(actionId)) {
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
    return (
      <div
        className={name === undefined ? styles.ingredient : styles[`${name}Ingredient`]}
        style={{ backgroundImage: `url(${ingredient.image_url})` }}
      >
        {actionImgs}
      </div>
    );
  }
}

export default connect(state => ({
  actions: state.actions,
}))(Ingredient);
