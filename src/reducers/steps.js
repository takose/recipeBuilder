const initialState = {
  // 0: {
  //   toolIds: [
  //     'knife',
  //   ],
  //   ingredientIds: [
  //     'chicken',
  //   ],
  //   actionId: 'cut',
  //   options: null,
  // },
  // 1: {
  //   toolIds: [
  //     'puta',
  //     'smoon',
  //   ],
  //   ingredientIds: [
  //     'soy_sauce',
  //   ],
  //   actionId: 'measure',
  //   options: {
  //     device: 'integlass',
  //     content: {
  //       amount: '10',
  //     },
  //   },
  // },
  // 2: {
  //   toolIds: [
  //     'pot',
  //     'puta',
  //     'ff',
  //   ],
  //   ingredientIds: [],
  //   actionId: 'pour',
  //   options: {
  //     device: 'puta',
  //     content: [
  //       {
  //         ingredientId: 'sake',
  //         time: '3',
  //       },
  //     ],
  //   },
  // },
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
