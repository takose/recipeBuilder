const initialState = [
  {
    id: 'stew',
    name: 'stew',
    name_ja: '煮込む',
    toolIds: ['pot', 'ff', 'puta'],
    ingredientIds: ['water', 'soy_sauce', 'sake'],
  },
  {
    id: 'put_in',
    name: 'put_in',
    name_ja: 'いれる',
    toolIds: ['pot', 'ff', 'puta', 'smoon'],
    ingredientIds: ['water', 'soy_sauce', 'sake'],
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
    toolIds: ['pot', 'ff', 'hashi'],
    ingredientIds: ['water', 'soy_sauce', 'sake', 'chicken', 'potato', 'onion', 'butter'],
  },
  {
    id: 'measure',
    name: 'measure',
    name_ja: 'はかる',
    toolIds: ['pot', 'ff', 'hashi'],
    ingredientIds: ['water', 'soy_sauce', 'sake', 'chicken', 'potato', 'onion', 'butter'],
  },
  {
    id: 'cut',
    name: 'cut',
    imageUrl: 'https://i.gyazo.com/f8b49fdd173db15a29af39a83ec4b6be.png',
    name_ja: '切る',
    toolIds: ['knife'],
    ingredientIds: ['chicken', 'potato', 'onion', 'butter'],
  },
  {
    id: 'mix',
    name: 'mix',
    name_ja: '混ぜる',
    toolIds: ['pot', 'ff', 'hashi'],
    ingredientIds: ['water', 'soy_sauce', 'sake', 'chicken', 'potato', 'onion', 'butter'],
  },
  {
    id: 'pour',
    name: 'pour',
    name_ja: '注ぐ',
    toolIds: ['pot', 'ff', 'smoon', 'puta'],
    ingredientIds: ['water', 'soy_sauce', 'sake', 'chicken', 'potato', 'onion', 'butter'],
  },
];

const actions = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default actions;
