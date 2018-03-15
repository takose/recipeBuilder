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
      'salmon',
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
        amount: '30',
      },
    },
  },
  4: {
    toolIds: [
      'bat',
    ],
    ingredientIds: [
      'salmon',
    ],
    actionId: 'coat',
    options: null,
  },
  5: {
    toolIds: [
      'puta',
    ],
    ingredientIds: [],
    actionId: 'prepare',
    options: null,
  },
  6: {
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
  7: {
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
  8: {
    toolIds: [
      'pot',
      'ff',
    ],
    ingredientIds: [],
    actionId: 'prepare',
    options: null,
  },
  9: {
    toolIds: [],
    ingredientIds: [
      'olieve_oil',
    ],
    actionId: 'put_in',
    options: null,
  },
  10: {
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
  11: {
    toolIds: [],
    ingredientIds: [
      'salmon',
    ],
    actionId: 'put_in',
    options: null,
  },
  12: {
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
  13: {
    toolIds: [],
    ingredientIds: [
      'mushroom'
    ],
    actionId: 'put_in',
    options: null
  },
  14: {
    toolIds: [
      'hera'
    ],
    ingredientIds: [],
    actionId: 'stir_fly',
    options: null
  },
  15: {
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
  16: {
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
  17: {
    toolIds: [
      'puta'
    ],
    ingredientIds: [],
    actionId: 'put_in',
    options: {
      device: 'puta',
      content: {
        pod: 'A'
      }
    }
  },
  18: {
    toolIds: [
      'puta',
    ],
    ingredientIds: [],
    actionId: 'put_in',
    options: {
      device: 'puta',
      content: {
        pod: 'B',
      },
    },
  },
  19: {
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
  20: {
    toolIds: [
      'ff',
    ],
    ingredientIds: [],
    actionId: 'switch_power',
    options: {
      device: 'ff',
      content: {
        power: 0,
      },
    },
  },
  21: {
    toolIds: [],
    ingredientIds: [],
    actionId: '',
    options: null
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
