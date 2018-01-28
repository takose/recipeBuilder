const stepPosition = (state = 'TABLE', action) => {
  switch (action.type) {
    case 'CHANGE_TOOL':
      if (action.toolId === 0) {
        return 'STOVE';
      } else {
        return 'TABLE'
      }
    default:
      return state;
  }
};

export default stepPosition;
