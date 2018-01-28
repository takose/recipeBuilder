let currentStepId = 0;
export const addStep = () => {
  currentStepId += 1;
  return ({
    id: currentStepId,
    type: 'ADD_STEP',
  });
};

export const addIngredient = ingredient => ({
  type: 'ADD_INGREDIENT',
  ingredientId: ingredient.id,
  currentStepId,
});

export const addTool = tool => ({
  type: 'ADD_TOOL',
  toolId: tool.id,
  currentStepId,
});
