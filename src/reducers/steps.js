const initialState = {
  0: {
    toolIds: [
      'knife',
    ],
    ingredientIds: [
      'mushroom',
    ],
    actionId: 'cut',
    options: {
      content: {
        fineness: '5',
      },
    },
  },
  1: {
    toolIds: [
      'knife',
    ],
    ingredientIds: [
      'cabbage',
    ],
    actionId: 'cut',
    options: {
      content: {
        fineness: '5',
      },
    },
  },
  2: {
    toolIds: [
      'bat',
    ],
    ingredientIds: [],
    actionId: 'prepare',
    options: null,
  },
  3: {
    toolIds: [
      'smoon',
    ],
    ingredientIds: [
      'potato_starch',
    ],
    actionId: 'measure',
    options: {
      device: 'smoon',
      content: {
        amount: '45',
      },
    },
  },
  4: {
    toolIds: [
      'smoon',
    ],
    ingredientIds: [
      'salt',
    ],
    actionId: 'measure',
    options: {
      device: 'smoon',
      content: {
        amount: '5',
      },
    },
  },
  5: {
    toolIds: [
      'bat',
    ],
    ingredientIds: [
      'salmon',
    ],
    actionId: 'coat',
    options: null,
  },
  6: {
    toolIds: [
      'puta',
    ],
    ingredientIds: [],
    actionId: 'prepare',
    options: null,
  },
  7: {
    toolIds: [
      'integlass',
    ],
    ingredientIds: [
      'dashi',
    ],
    actionId: 'measure',
    options: {
      device: 'smoon',
      content: {
        amount: '30',
      },
    },
  },
  8: {
    toolIds: [
      'integlass',
    ],
    ingredientIds: [
      'cream',
    ],
    actionId: 'measure',
    options: {
      device: 'smoon',
      content: {
        amount: '60',
      },
    },
  },
  9: {
    toolIds: [
      'pot',
      'ff',
    ],
    ingredientIds: [],
    actionId: 'prepare',
    options: null,
  },
  10: {
    toolIds: [],
    ingredientIds: [
      'butter',
    ],
    actionId: 'put_in',
    options: null,
  },
  11: {
    toolIds: [],
    ingredientIds: [
      'garlic',
    ],
    actionId: 'put_in',
    options: null,
  },
  12: {
    toolIds: [
      'ff',
    ],
    ingredientIds: [],
    actionId: 'switch_power',
    options: {
      device: 'ff',
      content: {
        power: 3,
      },
    },
  },
  13: {
    toolIds: [
      'hera',
    ],
    ingredientIds: [],
    actionId: 'stir_fly',
    options: null,
  },
  14: {
    toolIds: [],
    ingredientIds: [
      'salmon',
    ],
    actionId: 'put_in',
    options: null,
  },
  15: {
    toolIds: [
      'ff',
    ],
    ingredientIds: [],
    actionId: 'fry',
    options: {
      device: 'ff',
      content: {
        power: 3,
        time: 9,
      },
    },
  },
  16: {
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
