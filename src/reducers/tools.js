const initialState = [
  {
    id: 'spoon',
    name: 'spoon',
    image_url: 'https://i.gyazo.com/d64e335c472a6fb59842f36f012c1293.png',
    priority: 0,
    actionIds: ['measure', 'put_in'],
    actionIdsToCombine: ['heat', 'stew', 'stir_fly', 'mix', 'put_in'],
  },
  {
    id: 'hashi',
    name: 'hashi',
    image_url: 'https://i.gyazo.com/4d580f77c123c58a6f5093e828699270.png',
    priority: 1,
    actionIds: ['mix'],
    actionIdsToCombine: ['stew', 'stir_fly'],
  },
  {
    id: 'puta',
    name: 'puta',
    image_url: 'https://i.gyazo.com/ec6a135068bd17d1d6131c0e5e426dbc.png',
    priority: 1,
    actionIds: ['put_in', 'mix'],
    actionIdsToCombine: ['stew', 'stir_fly', 'measure'],
  },
  {
    id: 'pot',
    name: 'pot',
    image_url: 'https://i.gyazo.com/c228dfb8001440978f625d2c366f186b.png',
    priority: 2,
    actionIds: ['stew', 'stir_fly'],
    actionIdsToCombine: ['heat', 'put_in', 'mix', 'measure'],
  },
  {
    id: 'knife',
    name: 'knife',
    image_url: 'https://i.gyazo.com/bcec541a644661450688c5c4d7113d6f.png',
    priority: 1,
    actionIds: ['cut'],
    actionIdsToCombine: [],
  },
  {
    id: 'ff',
    name: 'ff',
    image_url: 'https://i.gyazo.com/e385648bd7cfbf0cea6fb27a911e7fef.png',
    priority: 3,
    actionIds: ['heat'],
    actionIdsToCombine: ['put_in', 'mix', 'stew', 'stir_fly'],
  },
];

const tools = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tools;
