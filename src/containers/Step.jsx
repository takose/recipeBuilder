import React from 'react';
import { connect } from 'react-redux';
import Ingredient from './Ingredient';
import styles from './Step.scss';

class Step extends React.Component {
  render() {
    const { ingredients, tools, stepId, steps, equipments, toolPlace } = this.props;
    const currentStep = steps[stepId];
    const currentTools = currentStep.toolIds.length > 0 &&
      tools.map((t) => {
        if (currentStep.toolIds.includes(t.id)) {
          return (
            <div
              className={styles.tool}
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
    const ingredient = ingredients.find(i => i.id === currentStep.ingredientId);
    return (
      <div className={styles.step}>
        <div className={styles.tools}>
          {currentTools}
        </div>
        <div className={styles.ingredients}>
          {ingredient != null &&
            <div className={styles.ingredient}>
              <Ingredient
                ingredient={ingredient}
                showAction={false}
              />
            </div>
          }
        </div>
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
})(Step);
