const initialState = [
  {
    id: 'smoon',
    name: 'smoon',
    image_url: 'https://i.gyazo.com/400c0b5144e0b3541963749d108419a7.png',
    priority: 0,
    actionIds: ['measure', 'put_in'],
    actionIdsToCombine: ['heat', 'stew', 'stir_fly', 'mix', 'put_in'],
  },
  {
    id: 'puta',
    name: 'puta',
    image_url: 'https://i.gyazo.com/ec6a135068bd17d1d6131c0e5e426dbc.png',
    priority: 1,
    actionIds: ['pour', 'mix'],
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
  {
    id: 'hera',
    name: 'hera',
    image_url: 'https://i.gyazo.com/0fb610b1969d5e29d2233bb7a093c9a1.png',
    priority: 3,
    actionIds: ['heat'],
    actionIdsToCombine: ['put_in', 'mix', 'stew', 'stir_fly'],
  },
  {
    id: 'bat',
    name: 'bat',
    image_url: 'https://i.gyazo.com/82dab84f35e96084a924d95b873da9e5.png',
    priority: 3,
    actionIds: ['heat'],
    actionIdsToCombine: ['put_in', 'mix', 'stew', 'stir_fly'],
  },
  {
    id: 'integlass',
    name: 'integlass',
    image_url: 'https://i.gyazo.com/2629d4359cda779962acb28acb9ae6bb.png',
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
