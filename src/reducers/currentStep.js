const initialState = {
  option: null,
  stepId: 21,
  playingId: 0,
  actionIds: [],
  isFake: true,
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
    case 'TOGGLE_FAKE':
      return {
        ...state,
        isFake: !state.isFake,
      };
    case 'SET_ACTIVE_TOOL':
      return {
        ...state,
        activeTool: action.toolId,
      };
    case 'RESET_PLAYING_STEP':
      return {
        ...state,
        playingId: 0,
      };
    default:
      return state;
  }
};

export default currentStepId;
