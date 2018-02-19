const initialState = [
  {
    id: 'pot',
    name: 'pot',
    image_url: 'https://i.gyazo.com/47ef16ca91d585281fcbeebc815d5b63.png',
    priority: 2,
    actionIds: ['stew', 'stir_fly'],
    actionIdsToCombine: ['heat', 'put_in', 'mix', 'measure'],
  },
  {
    id: 'puta',
    name: 'puta',
    image_url: 'https://i.gyazo.com/d4adde7c55946e18265f187bf1d0ac57.png',
    priority: 1,
    actionIds: ['put_in', 'mix'],
    actionIdsToCombine: ['stew', 'stir_fly', 'measure'],
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
    id: 'hashi',
    name: 'hashi',
    image_url: 'https://i.gyazo.com/b248adbf5ea3b9e60be5845fba27c560.png',
    priority: 1,
    actionIds: ['mix'],
    actionIdsToCombine: ['stew', 'stir_fly'],
  },
  {
    id: 'ff',
    name: 'ff',
    image_url: '',
    priority: 3,
    actionIds: ['heat'],
    toolIdsToCombine: ['put_in', 'mix', 'stew', 'stir_fly'],
  },
  {
    id: 'spoon',
    name: 'spoon',
    image_url: 'https://i.gyazo.com/02aace8e39487667f4ac90aa8858f690.png',
    priority: 0,
    actionIds: ['measure', 'put_in'],
    actionIdsToCombine: ['heat', 'stew', 'stir_fly', 'mix', 'put_in'],
  },
];

const tools = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tools;
