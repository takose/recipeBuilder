import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import IngredientImage from './IngredientImage';
import styles from './TempStep.scss';
import Description from './Description';
import { updateStepAction, enableOption, updateOption } from '../actions';

class TempStep extends React.Component {
  static propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
    tools: PropTypes.arrayOf(PropTypes.object).isRequired,
    actions: PropTypes.arrayOf(PropTypes.object).isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    steps: PropTypes.PropTypes.object.isRequired,
    stepId: PropTypes.number.isRequired,
    currentActionIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    onActionNameClick: PropTypes.func.isRequired,
  }
  render() {
    const {
      ingredients, tools, stepId, steps, currentActionIds, actions, onActionNameClick,
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
    const currentActionNames =
        currentActionIds.map((id) => {
          const action = actions.find(a => a.id === id);
          const isCurrentAction = action.id === currentStep.actionId;
          return (
            <button
              key={action.id}
              className={
                isCurrentAction ? styles.actionName : styles.actionNameInactive
              }
              onClick={() => onActionNameClick(isCurrentAction, id)}
            >
              {action.name_ja}
            </button>
          );
        });

    return (
      <div className={styles.stepWrapper}>
        <div className={styles.actionNamesWrapper}>
          {
            currentStep.ingredientIds.length > 0 || currentStep.toolIds.length > 0 ? (
              <div>
                <p>Select:</p>
                <div className={styles.actionNames}>
                  {currentActionNames}
                </div>
              </div>
            ) : null
          }
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
  onActionNameClick: (isCurrentAction, currentActionId) => {
    if (isCurrentAction) {
      dispatch(updateStepAction(''));
    } else {
      dispatch(updateStepAction(currentActionId));
    }
    if (currentActionId === 'measure') {
      dispatch(enableOption('smoon'));
    } else if (currentActionId === 'pour') {
      dispatch(enableOption('puta'));
    } else {
      dispatch(enableOption(null));
      dispatch(updateOption(null));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TempStep);
