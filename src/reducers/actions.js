const initialState = [
  {
    id: 'stew',
    name: 'stew',
  },
  {
    id: 'put_in',
    name: 'put_in',
  },
  {
    id: 'put',
    name: 'put',
  },
  {
    id: 'stir_fly',
    name: 'stir_fly',
  },
  {
    id: 'measure',
    name: 'measure',
  },
  {
    id: 'cut',
    name: 'cut',
    imageUrl: 'https://i.gyazo.com/f8b49fdd173db15a29af39a83ec4b6be.png',
  },
  {
    id: 'mix',
    name: 'mix',
  },
];

const actions = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default actions;
