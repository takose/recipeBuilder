const stepPlace = (state = 'table', action) => {
  switch (action.type) {
    case 'UPDATE_STEP_PLACE':
      return action.stepPlaceId;
    default:
      return state;
  }
};

export default stepPlace;
