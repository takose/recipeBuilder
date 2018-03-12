const initialState = {
  puta: {
    pod: ['dashi', 'cream'],
  },
};

const steps = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_PUTA':
      return {
        ...state,
        puta: {
          pod: [
            ...state.puta.pod,
            ...action.ingredientId,
          ],
        },
      };
    default:
      return state;
  }
};

export default steps;
