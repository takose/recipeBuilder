const initialState = {
  stepId: 0,
  actionIds: [],
  equipmentId: 'ff',
};

const currentStepId = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_CURRENT_STEP_ID':
      return {
        ...state,
        stepId: state.stepId + 1,
      };
    case 'UPDATE_ACTION':
      return {
        ...state,
        actionIds: action.actionIds,
      };
    case 'UPDATE_EQUIPMENT_ID':
      return {
        ...state,
        equipmentId: action.equipmentId,
      };
    default:
      return state;
  }
};

export default currentStepId;
