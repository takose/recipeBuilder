import { connect } from 'react-redux';
import Ingredient from './Ingredient';
import ListFactory from './ListFactory';
import styles from './IngredientList.scss';
import {
  updateIngredient,
  updateAction,
  updateStepAction,
  enableOption,
} from '../actions';

const IngredientList = ListFactory(
  Ingredient,
  {
    listClassName: styles.ingredientList,
    imageClassName: styles.ingredientImage,
    imageUrl: 'https://i.gyazo.com/eb9fe663c24ef82dcf05ebd910ae1b78.png',
  },
);

const mapStateToProps = state => ({
  items: state.ingredients,
  actions: state.actions,
  currentActionIds: state.currentStep.actionIds,
  currentItemIds: state.steps[state.currentStep.stepId].ingredientIds,
  currentActionId: state.steps[state.currentStep.stepId].actionId,
});

const mapDispatchToProps = dispatch => ({
  onItemClick: (ingredientIds, actionIds, currentActionId) => {
    dispatch(updateAction(actionIds));
    dispatch(updateIngredient(ingredientIds));
    if (ingredientIds.length === 0 || !(actionIds.includes(currentActionId))) {
      dispatch(updateStepAction(''));
      dispatch(enableOption(null));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientList);
