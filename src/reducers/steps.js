const initialState = {
  0: {
    toolIds: [],
    actionId: '',
  },
};

const steps = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_STEP':
      return {
        ...state,
        [action.id]: {
          toolIds: [],
          actionId: '',
        },
      };
    case 'ADD_INGREDIENT':
      return {
        ...state,
        [action.currentStepId]: {
          ...state[action.currentStepId],
          ingredientId: action.ingredientId,
        },
      };
    case 'UPDATE_TOOL':
      return {
        ...state,
        [action.currentStepId]: {
          ...state[action.currentStepId],
          toolIds: action.toolIds,
        },
      };
    case 'UPDATE_PUTA_OPTION':
      return {
        ...state,
        [action.currentStepId]: {
          ...state[action.currentStepId],
          options: {
            ...state[action.currentStepId].options,
            puta: action.putaOption,
          },
        },
      };
    default:
      return state;
  }
};

export default steps;
