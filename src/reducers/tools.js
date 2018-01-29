const initialState = [
  {
    id: 'pot',
    name: 'pot',
    image_url: 'https://i.gyazo.com/9c105ae402046ec683345937b2bd0e9c.png',
    actionId: 0,
    withUsedToolIds: ['puta', 'hera'],
  },
  {
    id: 'puta',
    name: 'puta',
    image_url: 'https://i.gyazo.com/687daff4a11f143626c88be14c0d830f.png',
    actionId: 1,
    withUsedToolIds: ['pot'],
  },
  {
    id: 'knife',
    name: 'knife',
    image_url: 'https://i.gyazo.com/320f48fe6f67a2c84a1a318b3781b704.png',
    actionId: 2,
    withUsedToolIds: [],
  },
  {
    id: 'hera',
    name: 'hera',
    image_url: 'https://i.gyazo.com/48cf56673614ab7c1db71f1a3ef2920e.png',
    actionId: 3,
    withUsedToolIds: ['pot'],
  },
  {
    id: 'ff',
    name: 'ff',
    image_url: '',
    actionId: 4,
    withUsedToolIds: [],
  },
];

const tools = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tools;
