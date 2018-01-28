import React from 'react';
import { connect } from 'react-redux';
import styles from './Step.scss';

const IngredientImage = ({ ingredient, equipmentName }) => (
  <img
    className={styles[`${equipmentName}Ingredient`]}
    src={ingredient.image_url}
    alt="ingredient"
  />
);

const ToolImage = ({ tool, equipmentName }) => (
  <img
    className={styles[`${equipmentName}Tool`]}
    src={tool.image_url}
    alt="tool"
  />
);

class Step extends React.Component {
  render() {
    const { steps, ingredients, tools, currentStepId, equipments, equipmentId } = this.props;
    const currentStep = steps[currentStepId];
    const currentStepToolId = () => {
      if (currentStep.toolId != null) {
        return currentStep.toolId;
      }
      return 0;
    };
    const { puttableToolIds, name } = equipments[equipmentId];
    if (puttableToolIds.includes(currentStepToolId())) {
      const { ingredientId, toolId } = steps[currentStepId];
      return (
        <div className={styles[`${name}Step`]}>
          {toolId != null &&
            <ToolImage
              tool={tools[toolId]}
              equipmentName={name}
            />
          }
          {ingredientId != null &&
            <IngredientImage
              ingredient={ingredients[ingredientId]}
              equipmentName={name}
            />
          }
        </div>
      );
    }
    return null;
  }
}

export default connect(state => ({
  steps: state.steps,
  ingredients: state.ingredients,
  tools: state.tools,
  currentStepId: state.currentStepId,
  equipments: state.equipments,
}))(Step);
