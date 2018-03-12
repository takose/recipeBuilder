const initialState = {
  option: null,
  stepId: 16,
  playingId: 0,
  actionIds: [],
};

const currentStepId = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_CURRENT_STEP_ID':
      return {
        ...state,
        stepId: state.stepId + 1,
        actionIds: [],
        active: false,
      };
    case 'UPDATE_ACTION':
      return {
        ...state,
        actionIds: action.actionIds,
      };
    case 'FORWARD_STEP':
      return {
        ...state,
        playingId: state.playingId + 1,
      };
    case 'SET_ACTIVE_TOOL':
      return {
        ...state,
        activeTool: action.toolId,
      };
    default:
      return state;
  }
};

export default currentStepId;
