const initialState = [
  {
    id: 'potato',
    name: 'potato',
    name_ja: 'じゃがいも',
    image_url: 'https://i.gyazo.com/8b5ab3529147603b25b5320266daed8b.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'onion',
    name: 'onion',
    name_ja: 'たまねぎ',
    image_url: 'https://i.gyazo.com/7b16d7abbe17437a993bfa73783ba111.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'chicken',
    name: 'chicken',
    name_ja: '鶏肉',
    image_url: 'https://i.gyazo.com/8dd77c1de414a5a2598cfb420b90c00d.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'sake',
    name: 'sake',
    name_ja: '酒',
    image_url: 'https://3.bp.blogspot.com/-9lGFTFg5zb8/U2ssEDxICdI/AAAAAAAAf-Q/euXKlJ2hM9Q/s400/cooking_ryourisyu.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'soy_sauce',
    name: 'soy sauce',
    name_ja: 'しょうゆ',
    image_url: 'https://1.bp.blogspot.com/-C274JNx-u9Q/V6iHmgcnObI/AAAAAAAA88U/xgC8PfeLP2khNYz0ghMa5QkjaeVEGJyjACLcB/s400/cooking_syouyu_bottle.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'butter',
    name: 'butter',
    name_ja: 'バター',
    image_url: 'https://i.gyazo.com/a97bd4befce4fe205e69b9d38318ec7e.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'water',
    name: 'water',
    name_ja: '水',
    image_url: 'http://4.bp.blogspot.com/-x1wpk9HRedI/UICmyfbj1KI/AAAAAAAAGbA/ARFlXgvHqE4/s400/medicine_cup_water.png',
    merged: false,
    addedActionIds: [],
  },
];

const ingredients = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_INGREDIENT_STATE':
      return state.map((i) => {
        if (action.ingredientId === i.id) {
          return {
            ...i,
            addedActionIds: [
              ...i.addedActionIds,
              action.actionId,
            ],
          };
        }
        return i;
      });
    case 'UPDATE_MERGED_INGREDIENT_STATE':
      return state.map((i) => {
        if (action.ingredientId === i.id) {
          return {
            ...i,
            merged: true,
          };
        }
        return i;
      });
    default:
      return state;
  }
};

export default ingredients;
