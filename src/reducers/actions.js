const initialState = [
  {
    id: 0,
    name: 'stew',
  },
  {
    id: 1,
    name: 'complexed',
  },
  {
    id: 2,
    name: 'cut',
    imageUrl: 'https://i.gyazo.com/31e4f1afcfcb9ea472b5ab0ab58b5f7e.png',
  },
  {
    id: 3,
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
