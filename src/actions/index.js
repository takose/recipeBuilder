let currentStepId = 21;
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

export const updateIngredient = ingredientIds => ({
  type: 'UPDATE_INGREDIENT',
  ingredientIds,
  currentStepId,
});

export const updateTool = toolIds => ({
  type: 'UPDATE_TOOL',
  toolIds,
  currentStepId,
});

export const updateAction = actionIds => ({
  type: 'UPDATE_ACTION',
  actionIds,
});

export const updateStepAction = actionId => ({
  type: 'UPDATE_STEP_ACTION',
  actionId,
  currentStepId,
});

export const updateEquipmentId = equipmentId => ({
  type: 'UPDATE_EQUIPMENT_ID',
  equipmentId,
});

export const updateMergedIngredientState = ingredientId => ({
  type: 'UPDATE_MERGED_INGREDIENT_STATE',
  ingredientId,
});

export const addMiddleState = toolId => ({
  type: 'ADD_MIDDLE_STATE',
  toolId,
});

export const updateOption = option => ({
  type: 'UPDATE_OPTION',
  option,
  currentStepId,
});

export const addToPuta = ingredientId => ({
  type: 'ADD_TO_PUTA',
  ingredientId,
});

export const removeFromPuta = () => ({
  type: 'REMOVE_FROM_PUTA',
});

export const setActiveTool = toolId => ({
  type: 'SET_ACTIVE_TOOL',
  toolId,
});

export const forwardStep = () => ({
  type: 'FORWARD_STEP',
});

export const toggleFake = () => ({
  type: 'TOGGLE_FAKE',
});

export const resetPlayingStep = () => ({
  type: 'RESET_PLAYING_STEP',
});
