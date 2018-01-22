import { combineReducers } from 'redux';
import ingredients from './ingredients';
import steps from './steps';

const recipeBulder = combineReducers({
  ingredients,
  steps,
});

export default recipeBulder;
