import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import ingredients from './ingredients';
import tools from './tools';
import steps from './steps';
import currentStep from './currentStep';
import actions from './actions';
import middleStates from './middleStates';

const recipeBulder = combineReducers({
  ingredients,
  tools,
  steps,
  currentStep,
  actions,
  middleStates,
  router: routerReducer,
});

export default recipeBulder;
