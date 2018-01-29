import { combineReducers } from 'redux';
import ingredients from './ingredients';
import tools from './tools';
import steps from './steps';
import currentStepId from './currentStepId';
import equipments from './equipments';
import actions from './actions';
import stepPlace from './stepPlace';
import toolPlace from './toolPlace';
import middleStates from './middleStates';

const recipeBulder = combineReducers({
  ingredients,
  tools,
  steps,
  currentStepId,
  equipments,
  actions,
  stepPlace,
  toolPlace,
  middleStates,
});

export default recipeBulder;
