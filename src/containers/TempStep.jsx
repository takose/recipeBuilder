import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import IngredientImage from './IngredientImage';
import styles from './TempStep.scss';
import Description from './Description';

class TempStep extends React.Component {
  render() {
    const { ingredients, tools, stepId, steps, equipments, toolPlace, currentActionNames } = this.props;
    const currentStep = steps[stepId];
    const currentTools = currentStep.toolIds.length > 0 ?
      tools.map((t) => {
        if (currentStep.toolIds.includes(t.id)) {
          return (
            <div
              key={t.id}
              className={styles.tool}
              style={{ backgroundImage: `url(${t.image_url})`, }}
              src={t.image_url}
              alt="tool"
            />
          );
        }
        return null;
      }) :
      (
        <div className={styles.emptyTool} />
      );
    const currentIngredients = currentStep.ingredientIds.length > 0 ?
      ingredients.map((i) => {
        if (currentStep.ingredientIds.includes(i.id)) {
          return (
            <div className={styles.ingredient} key={i.id}>
              <IngredientImage item={i} showAction={false} />
            </div>
          );
        }
        return null;
      }) :
      (
        <div className={styles.emptyIngredient} />
      );

    return (
      <div className={styles.stepWrapper}>
        <div className={styles.actionName}>
          {currentActionNames}
        </div>
        <div className={styles.step}>
          <div className={styles.tools}>
            {currentTools}
          </div>
          <div className={styles.ingredients}>
            {currentIngredients}
          </div>
          <Description />
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    currentActionNames: _.pluck(state.currentStep.actionIds, 'name_ja'),
    ingredients: state.ingredients,
    tools: state.tools,
    steps: state.steps,
    equipments: state.equipments,
    toolPlace: state.toolPlace,
  };
})(TempStep);
