const initialState = {
  0: {
  },
};

const steps = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_STEP':
      state.steps = [
        ...state.steps,
        {
          id: action.id,
        },
      ];
      return state;
    case 'ADD_INGREDIENT':
      return {
        ...state,
        [action.currentStepId]: {
          ...state[action.currentStepId],
          ingredientId: action.ingredientId,
        },
      };
    case 'ADD_TOOL':
      return {
        ...state,
        [action.currentStepId]: {
          ...state[action.currentStepId],
          toolId: action.toolId,
        },
      };
    default:
      return state;
  }
};

export default steps;
