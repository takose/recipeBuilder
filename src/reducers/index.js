import { combineReducers } from 'redux';
import ingredients from './ingredients';
import tools from './tools';
import steps from './steps';
import currentStepId from './currentStepId';
import equipments from './equipments';
import actions from './actions';

const recipeBulder = combineReducers({
  ingredients,
  tools,
  steps,
  currentStepId,
  equipments,
  actions,
});

export default recipeBulder;
