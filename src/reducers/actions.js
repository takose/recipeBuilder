const initialState = [
  {
    id: 'prepare',
    name: 'prepare',
    name_ja: '準備',
    toolIds: ['bat', 'puta', 'ff', 'pot'],
    ingredientIds: [],
    itemIds: ['puta', 'bat', 'ff', 'pot'],
  },
  {
    id: 'switch_power',
    name: 'switch_power',
    name_ja: '火力調整',
    toolIds: ['ff'],
    ingredientIds: [],
    itemIds: ['ff'],
  },
  {
    id: 'stir_fly',
    name: 'stir_fly',
    name_ja: '炒める',
    toolIds: ['hera'],
    ingredientIds: [],
    itemIds: ['hera'],
  },
  {
    id: 'measure',
    name: 'measure',
    name_ja: 'はかる',
    toolIds: ['integlass', 'smoon'],
    ingredientIds: ['water', 'cream', 'dashi', 'potato_starch', 'salt'],
    itemIds: ['integlass', 'smoon', 'water', 'cream', 'dashi', 'potato_starch', 'salt'],
  },
  {
    id: 'cut',
    name: 'cut',
    imageUrl: 'https://i.gyazo.com/f8b49fdd173db15a29af39a83ec4b6be.png',
    name_ja: '切る',
    toolIds: ['knife'],
    ingredientIds: ['cabbage', 'mushroom', 'butter'],
    itemIds: ['cabbage', 'mushroom', 'butter', 'knife'],
  },
  {
    id: 'stew',
    name: 'stew',
    name_ja: '煮込む',
    toolIds: ['ff'],
    ingredientIds: [],
    itemIds: ['ff'],
  },
  {
    id: 'fry',
    name: 'fry',
    name_ja: '焼く',
    toolIds: ['ff'],
    ingredientIds: [],
    itemIds: ['ff'],
  },
  {
    id: 'coat',
    name: 'coat',
    name_ja: 'まぶす',
    toolIds: ['bat'],
    ingredientIds: ['salmon', 'potato_starch'],
    itemIds: ['bat', 'salmon', 'potato_starch'],
  },
  {
    id: 'put_in',
    name: 'put_in',
    name_ja: 'いれる',
    toolIds: ['puta'],
    ingredientIds: ['cabbage', 'mushroom', 'butter', 'garlic', 'salmon'],
    itemIds: ['cabbage', 'mushroom', 'butter', 'garlic', 'puta', 'salmon'],
  },
  {
    id: 'flake',
    name: 'flake',
    name_ja: 'ほぐす',
    toolIds: [],
    ingredientIds: ['mushroom'],
    itemIds: ['mushroom'],
  },
];

const actions = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default actions;
