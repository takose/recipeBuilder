const initialState = {
  0: {
  },
};

const steps = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_STEP':
      state = {
        ...state,
        [action.id]: {
        },
      };
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
          actionId: action.actionId,
        },
      };
    default:
      return state;
  }
};

export default steps;
