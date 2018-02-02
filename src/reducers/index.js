import { combineReducers } from 'redux';
import ingredients from './ingredients';
import tools from './tools';
import steps from './steps';
import currentStep from './currentStep';
import equipments from './equipments';
import actions from './actions';
import stepPlace from './stepPlace';
import toolPlace from './toolPlace';
import middleStates from './middleStates';

const recipeBulder = combineReducers({
  ingredients,
  tools,
  steps,
  currentStep,
  equipments,
  actions,
  stepPlace,
  toolPlace,
  middleStates,
});

export default recipeBulder;
