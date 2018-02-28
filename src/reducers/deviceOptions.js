const initialState = {
  puta: {
    pod: [],
  },
};

const steps = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PUTA_OPTION':
      return {
        ...state,
        puta: {
          pod: [
            ...state.puta.pod,
            ...action.putaOption,
          ],
        },
      };
    default:
      return state;
  }
};

export default steps;
