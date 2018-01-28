import { combineReducers } from 'redux';
import ingredients from './ingredients';
import tools from './tools';
import steps from './steps';
import currentStepId from './currentStepId';
import stepPosition from './stepPosition';
import equipments from './equipments';

const recipeBulder = combineReducers({
  ingredients,
  tools,
  steps,
  currentStepId,
  stepPosition,
  equipments,
});

export default recipeBulder;
