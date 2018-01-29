const middleStates = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MIDDLE_STATE':
      return [
        ...state,
        {
          toolId: action.toolId,
        },
      ];
    default:
      return state;
  }
};

export default middleStates;
