import React from 'react';
import { connect } from 'react-redux';
import Ingredient from './Ingredient';
import styles from './TempStep.scss';

class TempStep extends React.Component {
  render() {
    const { ingredients, tools, stepId, steps, equipments, toolPlace } = this.props;
    const currentStep = steps[stepId];
    const currentTools = tools.map((t) => {
      if (currentStep.toolIds.includes(t.id)) {
        return (
          <img
            className={styles.tool}
            src={t.image_url}
            alt="tool"
          />
        );
      }
      return null;
    });
    const ingredient = ingredients.find(i => i.id === currentStep.ingredientId);
    return (
      <div className={styles.step}>
        {currentTools}
        {ingredient != null &&
          <div className={styles.ingredient}>
            <Ingredient
              ingredient={ingredient}
            />
          </div>
        }
      </div>
    );
  }
}

export default connect((state) => {
  return {
    ingredients: state.ingredients,
    tools: state.tools,
    steps: state.steps,
    equipments: state.equipments,
    toolPlace: state.toolPlace,
  };
})(TempStep);
