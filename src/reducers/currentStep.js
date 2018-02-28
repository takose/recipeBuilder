const allActionIds = ['stew', 'cut', 'mix', 'stir_fly', 'measure', 'pour'];
const initialState = {
  option: null,
  stepId: 0,
  actionIds: allActionIds,
};

const currentStepId = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_CURRENT_STEP_ID':
      return {
        ...state,
        stepId: state.stepId + 1,
        actionIds: allActionIds,
        active: false,
      };
    case 'UPDATE_ACTION':
      return {
        ...state,
        actionIds: action.actionIds,
      };
    case 'ENABLE_OPTION':
      return {
        ...state,
        option: action.optionName,
      };
    default:
      return state;
  }
};

export default currentStepId;
