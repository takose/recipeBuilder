const initialState = {
  0: {
    toolIds: [],
    ingredientIds: [
      'mushroom',
    ],
    actionId: 'flake',
    options: null,
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
        fineness: '4',
      },
    },
  },
  2: {
    toolIds: [
      'knife',
    ],
    ingredientIds: [
      'salmon',
    ],
    actionId: 'cut',
    options: {
      content: {
        fineness: '5',
      },
    },
  },
  3: {
    toolIds: [
      'bat',
    ],
    ingredientIds: [],
    actionId: 'prepare',
    options: null,
  },
  4: {
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
        amount: '30',
      },
    },
  },
  5: {
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
  6: {
    toolIds: [
      'bat',
    ],
    ingredientIds: [
      'salmon',
    ],
    actionId: 'coat',
    options: null,
  },
  7: {
    toolIds: [
      'puta',
    ],
    ingredientIds: [],
    actionId: 'prepare',
    options: null,
  },
  8: {
    toolIds: [
      'integlass',
    ],
    ingredientIds: [
      'dashi',
    ],
    actionId: 'measure',
    options: {
      device: 'integlass',
      content: {
        amount: '80',
      },
    },
  },
  9: {
    toolIds: [
      'integlass',
    ],
    ingredientIds: [
      'cream',
    ],
    actionId: 'measure',
    options: {
      device: 'integlass',
      content: {
        amount: '180',
      },
    },
  },
  10: {
    toolIds: [
      'pot',
      'ff',
    ],
    ingredientIds: [],
    actionId: 'prepare',
    options: null,
  },
  11: {
    toolIds: [],
    ingredientIds: [
      'olieve_oil',
    ],
    actionId: 'put_in',
    options: null,
  },
  12: {
    toolIds: [],
    ingredientIds: [
      'garlic',
    ],
    actionId: 'put_in',
    options: null,
  },
  13: {
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
  14: {
    toolIds: [
      'hera',
    ],
    ingredientIds: [],
    actionId: 'stir_fly',
    options: null,
  },
  15: {
    toolIds: [],
    ingredientIds: [
      'salmon',
    ],
    actionId: 'put_in',
    options: null,
  },
  16: {
    toolIds: [
      'ff',
    ],
    ingredientIds: [],
    actionId: 'fry',
    options: {
      device: 'ff',
      content: {
        power: 3,
        time: 4,
      },
    },
  },
  17: {
    toolIds: [],
    ingredientIds: [
      'cabbage'
    ],
    actionId: 'put_in',
    options: null
  },
  18: {
    toolIds: [],
    ingredientIds: [
      'mushroom'
    ],
    actionId: 'put_in',
    options: null
  },
  19: {
    toolIds: [
      'hera'
    ],
    ingredientIds: [],
    actionId: 'stir_fly',
    options: null
  },
  20: {
    toolIds: [
      'integlass'
    ],
    ingredientIds: [
      'water'
    ],
    actionId: 'measure',
    options: {
      device: 'integlass',
      content: {
        amount: '350'
      }
    }
  },
  21: {
    toolIds: [
      'ff'
    ],
    ingredientIds: [],
    actionId: 'stew',
    options: {
      device: 'ff',
      content: {
        power: 5,
        time: 8
      }
    }
  },
  22: {
    toolIds: [
      'puta'
    ],
    ingredientIds: [],
    actionId: 'put_in',
    options: {
      device: 'puta',
      content: {}
    }
  },
  23: {
    toolIds: [
      'ff'
    ],
    ingredientIds: [],
    actionId: 'stew',
    options: {
      device: 'ff',
      content: {
        power: 3,
        time: 5
      }
    }
  },
  24: {
    toolIds: [],
    ingredientIds: [],
    actionId: '',
    options: null
  }
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
