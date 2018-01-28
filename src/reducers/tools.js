const initialState = [
  {
    id: 0,
    name: 'pot',
    image_url: 'https://i.gyazo.com/9c105ae402046ec683345937b2bd0e9c.png',
    actionId: 0,
  },
  {
    id: 1,
    name: 'puta',
    image_url: 'https://i.gyazo.com/687daff4a11f143626c88be14c0d830f.png',
    actionId: 1,
  },
  {
    id: 2,
    name: 'knife',
    image_url: 'https://i.gyazo.com/320f48fe6f67a2c84a1a318b3781b704.png',
    actionId: 2,
  },
  {
    id: 3,
    name: 'hera',
    image_url: 'https://i.gyazo.com/0fb610b1969d5e29d2233bb7a093c9a1.png',
    actionId: 3,
  },
  {
    id: 4,
    name: 'ff',
    image_url: '',
    actionId: 4,
  },
];

const tools = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tools;
