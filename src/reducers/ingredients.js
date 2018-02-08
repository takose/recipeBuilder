const initialState = [
  {
    id: 'cauliflower',
    name: 'cauliflower',
    image_url: 'http://4.bp.blogspot.com/-A5NNn8q2w28/UkJMp4-YKgI/AAAAAAAAYQ8/YR5TvsY3POg/s400/cauliflower.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'onion',
    name: 'onion',
    image_url: 'http://3.bp.blogspot.com/-SDkR2b5YQec/UkJNENH-daI/AAAAAAAAYYE/fZCzG5KG9I4/s400/tamanegi_onion.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'chicken',
    name: 'chicken',
    image_url: 'https://2.bp.blogspot.com/-OPMQ6Nodeao/U2srxvijNNI/AAAAAAAAf4I/OPmSGh_x_nA/s400/niku_tori.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'sake',
    name: 'sake',
    image_url: 'https://3.bp.blogspot.com/-9lGFTFg5zb8/U2ssEDxICdI/AAAAAAAAf-Q/euXKlJ2hM9Q/s400/cooking_ryourisyu.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'soy_sauce',
    name: 'soy sauce',
    image_url: 'https://1.bp.blogspot.com/-C274JNx-u9Q/V6iHmgcnObI/AAAAAAAA88U/xgC8PfeLP2khNYz0ghMa5QkjaeVEGJyjACLcB/s400/cooking_syouyu_bottle.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'butter',
    name: 'butter',
    image_url: 'https://i.gyazo.com/a97bd4befce4fe205e69b9d38318ec7e.png',
    merged: false,
    addedActionIds: [],
  },
  {
    id: 'water',
    name: 'water',
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
