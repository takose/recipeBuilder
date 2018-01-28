const currentStepId = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_CURRENT_STEP_ID':
      state += 1;
      return state;
    default:
      return state;
  }
};

export default currentStepId;
