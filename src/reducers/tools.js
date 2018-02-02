const initialState = [
  {
    id: 'pot',
    name: 'pot',
    image_url: 'https://i.gyazo.com/9c105ae402046ec683345937b2bd0e9c.png',
    priority: 2,
    actionIds: ['stew', 'stir_fly'],
    actionIdsToCombine: ['heat', 'put_in', 'mix'],
  },
  {
    id: 'puta',
    name: 'puta',
    image_url: 'https://i.gyazo.com/687daff4a11f143626c88be14c0d830f.png',
    priority: 1,
    actionIds: ['put_in', 'mix'],
    actionIdsToCombine: ['stew', 'stir_fly'],
  },
  {
    id: 'knife',
    name: 'knife',
    image_url: 'https://i.gyazo.com/320f48fe6f67a2c84a1a318b3781b704.png',
    priority: 1,
    actionIds: ['cut'],
    actionIdsToCombine: [],
  },
  {
    id: 'hera',
    name: 'hera',
    image_url: 'https://i.gyazo.com/48cf56673614ab7c1db71f1a3ef2920e.png',
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
];

const tools = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tools;
