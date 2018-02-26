import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Ingredient.scss';

class IngredientImage extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    item: PropTypes.object.isRequired,
    actions: PropTypes.arrayOf(PropTypes.object).isRequired,
    showAction: PropTypes.bool,
  }
  static defaultProps = {
    showAction: true,
  }
  render() {
    const { item, actions, showAction } = this.props;
    let actionImgs;
    if (showAction) {
      actionImgs = item.addedActionIds.map((actionId) => {
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
          backgroundImage: `url(${item.image_url})`,
          opacity: (item.merged && showAction !== false) ? 0.5 : 1,
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
