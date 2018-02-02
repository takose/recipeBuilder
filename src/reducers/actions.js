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
    imageUrl: 'https://i.gyazo.com/31e4f1afcfcb9ea472b5ab0ab58b5f7e.png',
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
