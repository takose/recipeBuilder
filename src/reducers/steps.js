const initialState = {
  0: {
    toolIds: [],
    ingredientIds: [],
    actionId: '',
    options: null,
  },
};

const steps = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_STEP':
      return {
        ...state,
        [action.id]: {
          toolIds: [],
          ingredientIds: [],
          actionId: '',
          options: null,
        },
      };
    case 'UPDATE_INGREDIENT':
      return {
        ...state,
        [action.currentStepId]: {
          ...state[action.currentStepId],
          ingredientIds: action.ingredientIds,
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
    case 'UPDATE_STEP_ACTION':
      return {
        ...state,
        [action.currentStepId]: {
          ...state[action.currentStepId],
          actionId: action.actionId,
        },
      };
    case 'UPDATE_OPTION':
      return {
        ...state,
        [action.currentStepId]: {
          ...state[action.currentStepId],
          options: action.option,
        },
      };
    default:
      return state;
  }
};

export default steps;
