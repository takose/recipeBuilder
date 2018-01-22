let currentStepId = 0;
let currentIngredientId = -1;
export const addStep = () => {
  currentStepId += 1;
  currentIngredientId = -1;
  return ({
    id: currentStepId,
    type: 'ADD_STEP',
  });
};

export const addIngredient = (ingredient) => {
  currentIngredientId += 1;
  return ({
    id: currentStepId,
    type: 'ADD_INGREDIENT',
    ingredient,
  });
};
