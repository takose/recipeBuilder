let currentStepId = 0;
export const addStep = () => {
  currentStepId += 1;
  return ({
    id: currentStepId,
    type: 'ADD_STEP',
  });
};

export const updateIngredientState = (currentIngredientId, currentActionId) => ({
  ingredientId: currentIngredientId,
  actionId: currentActionId,
  type: 'UPDATE_INGREDIENT_STATE',
});

export const incrementCurrentStepId = () => ({
  type: 'INCREMENT_CURRENT_STEP_ID',
});

export const addIngredient = ingredient => ({
  type: 'ADD_INGREDIENT',
  ingredientId: ingredient.id,
  currentStepId,
});

export const addTool = tool => ({
  type: 'ADD_TOOL',
  toolId: tool.id,
  actionId: tool.actionId,
  currentStepId,
});

export const addMiddleState = toolId => ({
  type: 'ADD_MIDDLE_STATE',
  toolId,
});
