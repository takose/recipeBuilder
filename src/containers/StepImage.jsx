import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import IngredientImage from './IngredientImage';
import styles from './StepImage.scss';

class StepImage extends React.Component {
  static propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
    tools: PropTypes.arrayOf(PropTypes.object).isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    step: PropTypes.object.isRequired,
  }

  render() {
    const {
      ingredients, tools, step,
    } = this.props;
    const toolList = step.toolIds.length > 0 &&
      tools.map((t) => {
        if (step.toolIds.includes(t.id)) {
          return (
            <div
              className={styles.tool}
              key={t.id}
              style={{
                backgroundImage: `url(${t.image_url})`,
              }}
              src={t.image_url}
              alt="tool"
            />
          );
        }
        return null;
      });
    const ingredientList = step.ingredientIds.length > 0 &&
      step.ingredientIds.map((id) => {
        const ingredient = ingredients.find(i => i.id === id);
        return (
          <IngredientImage
            item={ingredient}
            showAction={false}
            key={id}
          />
        );
      });
    ingredients.find(i => i.id === step.ingredientId);
    return (
      <div className={styles.step}>
        {
          toolList.length > 0 ?
            <div className={styles.tools}>
              {toolList}
            </div> : null
        }
        {
          ingredientList.length > 0 ?
            <div className={styles.ingredients}>
              {ingredientList}
            </div> : null
        }
      </div>
    );
  }
}

export default connect(state => ({
  ingredients: state.ingredients,
  tools: state.tools,
  equipments: state.equipments,
  toolPlace: state.toolPlace,
}))(StepImage);
