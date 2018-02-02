import React from 'react';
import { connect } from 'react-redux';
import Ingredient from './Ingredient';
import styles from './Step.scss';

class Step extends React.Component {
  render() {
    const { ingredients, tools, currentStep, equipments, equipmentId, toolPlace } = this.props;
    if (toolPlace[currentStep.toolIds[0]] === equipmentId ||
      (currentStep.toolIds[0] === undefined && equipmentId === 'table')) {
      const currentTools = tools.map((t) => {
        if (currentStep.toolIds.includes(t.id)) {
          return (
            <img
              className={styles[`${equipmentId}Tool`]}
              src={t.image_url}
              alt="tool"
            />
          );
        }
        return null;
      });
      const ingredient = ingredients.find(i => i.id === currentStep.ingredientId);
      return (
        <div className={styles[`${equipmentId}Step`]}>
          {currentTools}
          {ingredient != null &&
            <Ingredient
              ingredient={ingredient}
              equipment={equipments[equipmentId]}
            />
          }
        </div>
      );
    }
    return null;
  }
}

export default connect((state) => {
  const currentStep = state.steps[state.currentStep.stepId];
  return {
    ingredients: state.ingredients,
    tools: state.tools,
    currentStep,
    equipments: state.equipments,
    toolPlace: state.toolPlace,
  };
})(Step);
