const allActionIds = ['stew', 'cut', 'mix', 'stir_fly', 'measure', 'pour'];
const initialState = {
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
      };
    case 'UPDATE_ACTION':
      return {
        ...state,
        actionIds: action.actionIds,
      };
    default:
      return state;
  }
};

export default currentStepId;
