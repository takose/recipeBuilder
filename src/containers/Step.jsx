import React from 'react';
import { connect } from 'react-redux';
import Ingredient from './Ingredient';
import styles from './Step.scss';

class Step extends React.Component {
  render() {
    const { ingredients, tools, currentStep, equipments, equipmentId } = this.props;
    const { puttableToolIds, name } = equipments[equipmentId];
    if (puttableToolIds.includes(currentStep.toolId) ||
      (currentStep.toolId === undefined && name === 'table')) {
      const tool = tools.find(t => t.id === currentStep.toolId);
      const ingredient = ingredients.find(i => i.id === currentStep.ingredientId);
      return (
        <div className={styles[`${name}Step`]}>
          {tool != null &&
            <img
              className={styles[`${name}Tool`]}
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
  };
})(Step);
