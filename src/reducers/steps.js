const initialState = [
  {
    id: 0,
    ingredients: [],
  },
];

const steps = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_STEP':
      return [
        ...state,
        {
          id: action.id,
          ingredients: [],
        },
      ];
    case 'ADD_INGREDIENT':
      return state.map((step) => {
        if (step.id === action.id) {
          step.ingredients = [...step.ingredients, action.ingredient];
        }
        return step;
      });
    default:
      return state;
  }
};

export default steps;
