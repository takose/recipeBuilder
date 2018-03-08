import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import IngredientImage from '../IngredientImage';
import styles from './TempStep.scss';
import Description from './Description';
import StepNavigation from './StepNavigation';
import ActionSelections from './ActionSelections';

class TempStep extends React.Component {
  static propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
    tools: PropTypes.arrayOf(PropTypes.object).isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    steps: PropTypes.PropTypes.object.isRequired,
    stepId: PropTypes.number.isRequired,
  }
  render() {
    const {
      ingredients, tools, stepId, steps,
    } = this.props;
    const currentStep = steps[stepId];
    const currentTools = currentStep.toolIds.length > 0 ?
      tools.map((t) => {
        if (currentStep.toolIds.includes(t.id)) {
          return (
            <div
              key={t.id}
              className={styles.tool}
              style={{ backgroundImage: `url(${t.image_url})` }}
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
        <div className={styles.controlls}>
          <ActionSelections stepId={stepId} />
          <StepNavigation />
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

const mapStateToProps = state => ({
  currentActionIds: state.currentStep.actionIds,
  ingredients: state.ingredients,
  actions: state.actions,
  tools: state.tools,
  steps: state.steps,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TempStep);
