import React from 'react';
import { connect } from 'react-redux';
import Ingredient from './Ingredient';
import styles from './Step.scss';

class Step extends React.Component {
  render() {
    const { ingredients, tools, currentStep, equipments, equipmentId, toolPlace } = this.props;
    if (toolPlace[currentStep.toolId] === equipmentId ||
      (currentStep.toolId === undefined && equipmentId === 'table')) {
      const tool = tools.find(t => t.id === currentStep.toolId);
      const ingredient = ingredients.find(i => i.id === currentStep.ingredientId);
      return (
        <div className={styles[`${equipmentId}Step`]}>
          {tool != null &&
            <img
              className={styles[`${equipmentId}Tool`]}
              src={tool.image_url}
              alt="tool"
            />
          }
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
  const currentStep = state.steps[state.currentStepId];
  return {
    ingredients: state.ingredients,
    tools: state.tools,
    currentStep,
    equipments: state.equipments,
    toolPlace: state.toolPlace,
  };
})(Step);
