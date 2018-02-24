const initialState = [
  {
    id: 'stew',
    name: 'stew',
    name_ja: '煮込む',
  },
  {
    id: 'put_in',
    name: 'put_in',
    name_ja: 'いれる',
  },
  {
    id: 'put',
    name: 'put',
    name_ja: '',
  },
  {
    id: 'stir_fly',
    name: 'stir_fly',
    name_ja: '炒める',
  },
  {
    id: 'measure',
    name: 'measure',
    name_ja: 'はかる',
  },
  {
    id: 'cut',
    name: 'cut',
    imageUrl: 'https://i.gyazo.com/f8b49fdd173db15a29af39a83ec4b6be.png',
    name_ja: '切る',
  },
  {
    id: 'mix',
    name: 'mix',
    name_ja: '混ぜる',
  },
  {
    id: 'heat',
    name: 'heat',
    name_ja: '加熱',
  },
];

const actions = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default actions;
